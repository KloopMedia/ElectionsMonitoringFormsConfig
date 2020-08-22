form_config = {
    main_title: "OPENING PROCEDURES",
    questions: [
        {
            title: "Group number:",
            type: "select",
            answer: [
                "Group 1", "Group 2", "Group 3", "Group 4", "Group 5", "Group 6", "Group 7", "Group 8", "Group 9", "Group 10"
            ]
        },
        {
            title: "PS ID:",
            type: "input"
        },
        {
            title: "Time of arrival:",
            type: "time"
        },
        {
            title: "PSO chairperson male/female:",
            type: "radio",
            answer: ["Male", "Female"]
        }
    ],
    gateway: "www.blablabla.kg"
}

export default form_config