const Database = require("../Database");
var fs = require("fs");

class BusinessUsers {
  id = 0;
  businessid = "";
  name = "";
  email = "";
  mobileno = "";
  password = "";
  firebaseid = "";
  billingaddressid = "";
  shippingaddressid = "";

  db = new Database.Database();

  constructor() {
    this.id = 0;
    this.businessid = 0;
    this.name = "";
    this.email = "";
    this.mobileno = "";
    this.password = "";
    this.firebaseid = "";
    this.billingaddressid = "";
    this.shippingaddressid = "";
   
  }

//     if (this.imagecode != "") {
//       let base64image = this.imagecode.replace(/^data:image\/jpeg;base64,/, "");
//       base64image = base64image.replace(/^data:image\/png;base64,/, "");
//     //   this.picpath = "BusinessUsers/" + Math.random().toString(36).substring(2, 7) + ".png";
//     //   fs.writeFile("public/" + this.picpath, base64image, 'base64', function (err) {
//     //       console.log("Error image saving-" + err);
//     //   });
//   }
    save = () => {

    if (this.id == 0) {
      this.query = "INSERT INTO business_users(businessid, name, email, mobileno, password, firebaceid, billingaddressid, shipingaddressid) ";
      this.query += "VALUES ('" + this.businessid + "', '" + this.name + "', '" + this.email + "', '";
      this.query += this.mobileno + "' , '" + this.password + "', '" + this.firebaceid + "',";
      this.query += "'" +this.billingaddressid +"',";
      this.query += "'" +this.shipingaddressid +  "')";
    } 
    else {
      this.query = "UPDATE business_users SET businessid = " + this.businessid + ", ";
      this.query += "firebaseid = " + this.firebaseid + ", ";
      this.query += "businessvendorid = " + this.businessvendorid + ", ";
      this.query += "billingaddressid = " + this.billingaddressid + ", ";
      this.query += "shippingaddressid = '" + this.shippingaddressid + "', ";
      
    //   if(this.picpath != "")
    //      this.query += "picpath = " + this.picpath + ", ";
    //   this.query += "price = " + this.price + ", ";
    //   this.query += "instock = '" + this.instock + "' ";
    //   this.query += "WHERE id =" + this.id;
    }

    console.log(this.query);
    return new Promise((resolve, reject) => {
      this.db.query(this.query, (err, result) => {
        this.db.close();
        if (err) {
          return reject(err);
        }
        resolve(result);
      });
    });
  };

  list = () => {
    this.query = "SELECT * FROM business_users WHERE businessid = " + this.businessid + " ORDER BY name";
    return new Promise((resolve, reject) => {
      this.db.query(this.query, (err, result) => {
        this.db.close();
        if (err) reject(err);
        resolve(result);
      });
    });
  };

  delete = () => {
    this.query = "SELECT * FROM business_users WHERE id = " + this.id;
    return new Promise((resolve, reject) => {
        this.db.query(this.query, (err, result) => {
        this.picpath = result[0].picpath;
        this.query = "DELETE FROM business_users WHERE id = " + this.id;        
          this.db.query(this.query, (err, result) => {
            if (err) {
              this.db.close();        
              reject(err);
            }
            fs.unlink("public/" + this.picpath, (err)=>{
              this.db.close();
              resolve(result);
            });
          });
        });
      });
  };

  changestatus = () => {
    this.query = "UPDATE business_users SET status = '" + this.status + "' WHERE id = " + this.id;
    return new Promise((resolve, reject) => {
      this.db.query(this.query, (err, result) => {
        this.db.close();
        if (err) reject(err);
        resolve(result);
      });
    });
  };

  get = () => {
    this.query = "SELECT * FROM business_users WHERE id = " + this.id;
    return new Promise((resolve, reject) => {
      this.db.query(this.query, (err, result) => {
        this.db.close();
        if (err) reject(err);
        resolve(result);
      });
    });
  };
}

module.exports = {
  BusinessUsers: BusinessUsers
};
