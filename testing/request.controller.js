const assert = require('assert');
const RequestController = require('../backend/controllers/request.controller');

describe('ทดสอบการทำงานผ่าน RequestController', () => {
    let controller = RequestController;

    //beforeEach(() => controller = new RequestController (

    //));

    it('ต้องมี function getRequest', () => {
        assert.equal(typeof controller.getRequest, 'function');
    });

    it('function created ต้องผ่านงานถุกต้อง', async()=> {
        const item = await controller.createRequest({
            name: "IT-00001",
            subject: "test subject",

        });
        const items = await controller.getRequest();
        assert.equal(items.length, 2);
    });
});