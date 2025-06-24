[<img src="https://cdn.docubee.app/static/docubee-logo.png" width="600"/>](https://docubee.app/signup?source=eSigApi)

# Docubee eSignature API Node.js Sample

## Requirements

- [Node.js 18.13.0](https://nodejs.org/) or higher

- You will first need to [sign up for an API developer account](https://docubee.app/signup?source=eSigApi) with Docubee and retrieve your API key.

- Set your API key as an environment variable named `YOUR_API_TOKEN`.

## Samples

There are two examples included with the package which can be found in the root project folder:

- `example-email.js` - will send the document for signature to the email address set in the `emailSigner` variable. It will then send the completed document to the email address configured in the `emailFinalized` variable.

Update these to your liking and then use `npm run email` to execute the sample. 

- `example-link.js` will return a link for you to provide the signer of the document, and once completed send the completed document to the email address configured in the `emailFinalized` variable.

To run the sample update the variables above and use `npm run link`.

## About Docubee

Building secure, compliant eSignature capabilities into your application takes up valuable time and development resources. Fortunately, we've already done all that hard work for you. With [Docubee API](https://docs.docubee.app), you can bridge the gaps between systems by integrating our proven eSignature and forms workflow functionality into your software. Docubee is reliable and secure; and takes the guesswork out of compliance by meeting regulations for HIPAA, SOC 2, and more. 

We've got all the documentation samples you need to get up and running within a matter of minutes so you can spend more time working on the innovative features that will make your application a success.

Choose from a library of templates or create your own workflows using flexible conditional logic. Docubee's intuitive, easy-to-navigate interface allows you to start solving problems right away without weeks of tedious onboarding and complex integrations.
