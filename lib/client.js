import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: 'hc3jc5sl',
    dataset: 'production',
    apiVersion: '2022-03-10',
    useCdn: 'true',
    // token: 'sktGN3rDsnqOGhzEmRX2cGpXDzrSHV1H4Kv8PmbM4MddbD4DL5F9Sh3keE9gE8BXSidyCE0d0Fy1zmJ9Ltxi16sUSvCTQ1cthpSoFBnnGeTZ3kwxfQzuxiYsCFKsKyZS18Cxa5mCvP9TvcF9r18lkIVByanzb1Ja40NOFZIoyFD3ldFy3D3v'
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN
})



const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);