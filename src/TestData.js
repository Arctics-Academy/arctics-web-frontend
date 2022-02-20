const demoConsultant = {
    email: 'demo-consultant@arctic.com',
	username: 'Alex',
	identity: 'consultant',
    meetingsByTime: {
        2022: {
            1:[[{}, {}, {}, {}, {}, {date: 1, meetings: []}, {date: 2, meetings: []}], 
            [{date: 3, meetings: []}, {date: 4, meetings: []}, {date: 5, meetings: []}, {date: 6, meetings: []}, {date: 7, meetings: []}, {date: 8, meetings: []}, {date: 9, meetings: []}], 
            [{date: 10, meetings: []}, {date: 11, meetings: []}, {date: 12, meetings: []}, {date: 13, meetings: []}, {date: 14, meetings: []}, {date: 15, meetings: []}, {date: 16, meetings: []}], 
            [{date: 17, meetings: []}, {date: 18, meetings: []}, {date: 19, meetings: []}, {date: 20, meetings: []}, {date: 21, meetings: []}, {date: 22, meetings: []}, {date: 23, meetings: []}], 
            [{date: 24, meetings: []}, {date: 25, meetings: []}, {date: 26, meetings: []}, {date: 27, meetings: []}, {date: 28, meetings: []}, {date: 29, meetings: []}, {date: 30, meetings: []}], 
            [{date: 31, meetings: []}, {}, {}, {}, {}, {}, {}]], 
            2: [[{}, {date: 1, meetings: []}, {date: 2, meetings: []}, {date: 3, meetings: []}, {date: 4, meetings: []}, {date: 5, meetings: []}, {date: 6, meetings: []}], 
            [{date: 7, meetings: [{time: '16:00', status: 'todo'}]}, {date: 8, meetings: []}, {date: 9, meetings: []}, {date: 10, meetings: []}, {date: 11, meetings: []}, {date: 12, meetings: []}, {date: 13, meetings: []}], 
            [{date: 14, meetings: [{time: '16:00', status: 'finished'}]}, {date: 15, meetings: []}, {date: 16, meetings: []}, {date: 17, meetings: []}, {date: 18, meetings: []}, {date: 19, meetings: []}, {date: 20, meetings: []}], 
            [{date: 21, meetings: [{time: '16:00', status: 'canceled'}]}, {date: 22, meetings: []}, {date: 23, meetings: []}, {date: 24, meetings: []}, {date: 25, meetings: []}, {date: 26, meetings: []}, {date: 27, meetings: []}], 
            [{date: 28, meetings: [{time: '16:00', status: 'ready'}]}, {}, {}, {}, {}, {}, {}]]
        }
    },
    meetingsByStatus: {
        future: [{date: '2022/02/18 (五) ', time: '18:00~18:30', exp: 2, student: 'Alexa', grade: '高二', remark: 'Speek slower plz...', content: ['學習歷程', '面試準備'], lastPaymentStatus: '2022/02/02 未付款'}],
        past: [{date: '2022/01/20 (四) ', time: '18:00~18:30', exp: 2, student: 'Alexy', grade: '高二', remark: 'Speek slower plz...', content: ['學習歷程'], feedback: 'Like it!', lastPaymentStatus: '2022/01/15 已付款'}],
        canceled: [{date: '2022/01/05 (三) ', time: '18:00~18:30', exp: 2, student: 'Alexon', grade: '高二', remark: 'Speek slower plz...', content: ['學習歷程'], lastPaymentStatus: '2022/01/06 已取消'}]
    },
    receipts: [
        {id: 123451, student: 'Alexar', amount: 900, paytime: '2022/01/05', consultime: '2022/01/09', paystatus: '已提領'}, 
        {id: 123456, student: 'Alexa', amount: 500, paytime: '2022/02/05', consultime: '2022/02/09', paystatus: '未提領'},
        {id: 123411, student: 'Alexon', amount: 1500, paytime: '2022/12/05', consultime: '2022/12/09', paystatus: '未付款'},
        {id: 123421, student: 'Alexy', amount: 150, paytime: '2022/12/11', consultime: '2022/12/19', paystatus: '已提領'},
        {id: 123441, student: 'Alexara', amount: 250, paytime: '2022/02/05', consultime: '2022/02/10', paystatus: '已提領'},
        {id: 123431, student: 'Alexary', amount: 500, paytime: '2022/02/01', consultime: '2022/02/06', paystatus: '未付款'},
        {id: 123401, student: 'Alexaron', amount: 1500, paytime: '2022/02/01', consultime: '2022/02/11', paystatus: '未提領'}
    ]
}

export { demoConsultant }