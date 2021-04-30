const router = require("express").Router();

const File = require("../models/file");

router.get("/:uuid", async (req, res) => {
    try {
        const file = await File.findOne({
            uuid: req.params.uuid
        });
        if (!file) {
            return res.render("download", {
                error: "File Link Expired"
            });
        }
        return res.render("download", {
            uuid: file.uuid,
            fileName: file.filename,
            filesize: file.size,
            download: `${process.env.APP_BASE_URL}/file/download/${file.uuid}`,

        });
    } catch {
        return res.render("download", {
            error: "Something Went Wrong"
        });
    }
});

module.exports = router;