var express = require("express");
var BusinessUsers = require("../../models/business/Businessusers");
const router = express.Router();

router.post("/save", async (req, res) => {
  let body = req.body;
  let businessusers = new BusinessUsers.BusinessUsers();
  businessusers.id = body.data.id;
  businessusers.businessid = body.data.businessid;
  businessusers.name = body.data.name;
  businessusers.email = body.data.email;
  businessusers.mobileno = body.data.mobileno;
  businessusers.password = body.data.password;
  businessusers.firebaseid = body.data.firebaseid;
  businessusers.billingaddressid = body.data.billingaddressid;
  businessusers.shippingaddressid = body.data.shippingaddressid;

  //  console.log(body.data.businessusers)
  businessusers.save().then(
    (result) => {
      let data = {
        data: {
          status: "success",
          data: result,
        },
      };
      res.end(JSON.stringify(data));
    },
    (err) => {
      let data = {
        data: {
          status: "fail",
        },
      };
      res.end(JSON.stringify(data));
    }
  );
});

router.post("/list", async (req, res) => {
  let body = req.body;
  let businessusers = new BusinessUsers.BusinessUsers();
  businessusers.businessid = body.data.businessid;
  businessusers.list().then(
    (result) => {
      let data = {
        data: {
          status: "success",
          data: result,
        },
      };
      res.end(JSON.stringify(data));
    },
    (err) => {
      let data = {
        data: {
          status: "fail",
        },
      };
      res.end(JSON.stringify(data));
    }
  );
});

router.post("/delete", async (req, res) => {
  let body = req.body;
  let businessusers = new BusinessUsers.BusinessUsers();
  businessusers.id = body.data.id;
  businessusers.delete().then(
    (result) => {
      let data = {
        data: {
          status: "success",
          data: result,
        },
      };
      res.end(JSON.stringify(data));
    },
    (err) => {
      let data = {
        data: {
          status: "fail",
        },
      };
      res.end(JSON.stringify(data));
    }
  );
});

router.post("/get", async (req, res) => {
  let body = req.body;
  let businessusers = new BusinessUsers.BusinessUsers();
  businessusers.id = body.data.id;
  businessusers.get().then(
    (result) => {
      let data = {
        data: {
          status: "success",
          data: result,
        },
      };
      res.end(JSON.stringify(data));
    },
    (err) => {
      let data = {
        data: {
          status: "fail",
        },
      };
      res.end(JSON.stringify(data));
    }
  );
});

module.exports = router;
