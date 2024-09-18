// /api/github-file.js
export default async function handler(req, res) {
    const { fileUrl } = req.query;
    
    if (!fileUrl) {
        return res.status(400).json({ error: 'File URL is required' });
    }

    try {
        const response = await fetch(fileUrl);
        if (!response.ok) {
            throw new Error(`Failed to fetch file: ${response.status}`);
        }
        const data = await response.text();
        res.status(200).send(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
