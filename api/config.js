export default function handler(req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");

    res.status(200).json({
        publicKey: process.env.EMAILJS_PUBLIC_KEY,
        serviceId: process.env.EMAILJS_SERVICE_ID,
        templateId: process.env.EMAILJS_TEMPLATE_ID,
    });
}