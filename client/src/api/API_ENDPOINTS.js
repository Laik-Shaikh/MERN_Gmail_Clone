export const API_ENDPOINTS = {
    sent: {
        method: 'POST',
        path: 'api/save'
    },
    getEmailsFromType: {
        method: "GET",
        path: "api/mails"
    },
    saveDraft: {
        method: "PUT",
        path: "api/save/draft"
    },
    moveToBin: {
        method: "PUT",
        path: "api/moveToBin"
    }

}