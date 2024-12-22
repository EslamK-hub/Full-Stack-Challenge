const Announcement = require("../models/announcement.model");

// ----------------------------------------- Get All Announcements ----------------------------------------- //
const getAllAnnouncements = async (req, res) => {
    try {
        const announcements = await Announcement.find();
        res.json(announcements);
    } catch (err) {
        res.status(500).send("Server Error");
    }
};

// ----------------------------------------- Add Announcement ----------------------------------------- //
const addAnnouncement = async (req, res) => {
    const { title, content } = req.body;

    try {
        const newAnnouncement = new Announcement({
            title,
            content,
        });
        await newAnnouncement.save();
        res.status(201).json(newAnnouncement);
    } catch (err) {
        res.status(400).send("Bad Request");
    }
};

// ----------------------------------------- Get Announcement ----------------------------------------- //
const getAnnouncement = async (req, res) => {
    try {
        const announcement = await Announcement.findById(req.params.id);
        if (!announcement) {
            return res.status(404).send("Announcement not found");
        }
        res.json(announcement);
    } catch (err) {
        res.status(500).send("Server Error");
    }
};

// ----------------------------------------- Update Announcement ----------------------------------------- //
const updateAnnouncement = async (req, res) => {
    const { title, content } = req.body;

    try {
        const announcement = await Announcement.findByIdAndUpdate(
            req.params.id,
            { title, content },
            { new: true }
        );
        if (!announcement) {
            return res.status(404).send("Announcement not found");
        }
        res.json(announcement);
    } catch (err) {
        res.status(400).send("Bad Request");
    }
};

// ----------------------------------------- Delete Announcement ----------------------------------------- //
const deleteAnnouncement = async (req, res) => {
    try {
        const announcement = await Announcement.findByIdAndDelete(
            req.params.id
        );
        if (!announcement) {
            return res.status(404).send("Announcement not found");
        }
        res.json({ message: "Announcement deleted" });
    } catch (err) {
        res.status(500).send("Server Error");
    }
};

module.exports = {
    getAllAnnouncements,
    addAnnouncement,
    getAnnouncement,
    updateAnnouncement,
    deleteAnnouncement,
};
