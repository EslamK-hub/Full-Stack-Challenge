const express = require("express");
const {
    getAllAnnouncements,
    addAnnouncement,
    getAnnouncement,
    updateAnnouncement,
    deleteAnnouncement,
} = require("../controllers/announcement.controller");
const router = express.Router();

// ----------------------------------------- Get All Announcements ----------------------------------------- //
router.get("/", getAllAnnouncements);

// ----------------------------------------- Add Announcement ----------------------------------------- //
router.post("/", addAnnouncement);

// ----------------------------------------- Get Announcement ----------------------------------------- //
router.get("/:id", getAnnouncement);

// ----------------------------------------- Update Announcement ----------------------------------------- //
router.put("/:id", updateAnnouncement);

// ----------------------------------------- Delete Announcement ----------------------------------------- //
router.delete("/:id", deleteAnnouncement);

module.exports = router;
