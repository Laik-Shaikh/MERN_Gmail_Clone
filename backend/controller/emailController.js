const Email = require('../model/email');

exports.saveEmails = async (request, response) => {

    const payload = request.body;

    try {
        const newEmail = new Email(payload);
        newEmail.save();
        return response.status(201).json({ msg: "Email Sent Successfully" });
    } catch (error) {
        return response.status(400).json({ error: error.message })
    }

}

exports.getEmailsFromType = async (request, response) => {
    try {
        const { type } = request.params;
        
        const getMails = await Email.find({ type });
        return response.status(200).json(getMails);
        
    } catch (error) {
        return response.status(400).json({ error: error.message })
    }
}

exports.getEmailById = async (request, response) => {
    try {
        const { id } = request.params;

        const eMail = await Email.findById(id);
        return response.status(200).json(eMail);

    } catch (error) {
        return response.status(400).json({ error: error.message })
    }
}

exports.moveToDraft = async (request, response) => {
    const payload = request.body;

    try {
        const newEmail = new Email(payload);
        newEmail.save();
        return response.status(201).json({ msg: "Email Saved Successfully" });
    } catch (error) {
        return response.status(400).json({ error: error.message })
    }
}

exports.moveToBin = async (request, response) => {
    const ids = request.body;

    try {
        // [1 , 2, 3, 4] => e.g ids
        await Email.updateMany({ _id: { $in: ids } }, { $set: { starred: false, bin: true, type: "bin" } });
        return response.status(200).json({ msg: "Email Moved To Bin Successfully" });
    } catch (error) {
        return response.status(400).json({ error: error.message })
    }
}