// Get your free API Key at: https://www.docubee.com/solutions/integrations/docubee-api
// Full Docubee API Documentation: https://docs.docubee.app/#overview
import { createReadStream } from 'fs';

const apiToken = process.env.YOUR_API_TOKEN;

if (apiToken === "YOUR_API_TOKEN") {
    console.log('Error - Invalid token: Please set YOUR_API_TOKEN token environment variable.');
    process.exit(1);
}

const emailFinalized = "completed@example.com"; // Email address to receive the finalized document

// Upload the file and get a documentId to pass to create a signature endpoint
// https://docs.docubee.app/#upload
const uploadSampleDocument = async () => {

    const readStream = createReadStream('./sample-files/sample.pdf');

    const response = await fetch('https://docubee.app/api/v2/documents', {
        method: 'POST',
        headers: {
            'Authorization': apiToken,
            'Content-Type': 'application/pdf'
        },
        body: readStream,
        duplex: 'half'
    });

    const { documentId } = await response.json();
    return documentId;
}

// Call /signature endpoint to start signature process
// https://docs.docubee.app/#signature-api
const startSignature = async (documentId) => {

    const requestBody = JSON.stringify({
        documents: [{ documentId: documentId }],
        testMode: true,
        signers: [
            {
                label: 'John Smith',
                contactMethod: [
                    {
                        type: 'link'
                    }
                ]
            }
        ],
        "onSignaturesFinalized": [
            {
                type: 'email',
                email: emailFinalized
            }
        ]
    });

    const response = await fetch('https://docubee.app/api/v2/signatures', {
        method: 'POST',
        headers: {
            'Authorization': apiToken,
            'Content-Type': 'application/json'
        },
        body: requestBody
    });

    const signatureResponse = await response.json();
    return signatureResponse;
}

(async () => {
    console.log('\n##### Example Starting #####')
    const documentId = await uploadSampleDocument();
    console.log(`\nUploaded sample file and received a documentId of ${documentId}`)
    const response = await startSignature(documentId);
    console.log('\nURL for signer John Smith: (Follow URL to complete signature process)')
    console.log(`\n${response['signers'][0]['contactMethod'][0]['taskUrl']}\n`);
    console.log(`Once signed the final document will be sent to: ${emailFinalized}\n`)
    console.log('##### Example Complete #####\n')
})();
