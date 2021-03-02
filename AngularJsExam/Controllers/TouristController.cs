using AngularJsExam.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AngularJsExam.Controllers
{
    public class TouristController : Controller
    {
        // GET Tourist/GetTourist
        [HttpGet]
        public JsonResult GetTourist()
        {
            using (ApplicationDbContext db = new ApplicationDbContext())
            {
                List<Tourist> empList = db.Tourists.ToList();
                return Json(empList, JsonRequestBehavior.AllowGet);
            }

        }

        //POST Tourist/AddTourist
        [HttpPost]
        public JsonResult Insert(Tourist tourist)
        {
            if (tourist != null)
            {
                using (ApplicationDbContext db = new ApplicationDbContext())
                {
                    db.Tourists.Add(tourist);
                    db.SaveChanges();
                    return Json(new { success = true });
                }
            }
            else
            {
                return Json(new { success = false });
            }
        }


        //POST Tourist/Update     
        [HttpPost]
        public JsonResult Update(Tourist updatedTourist)
        {
            using (ApplicationDbContext db = new ApplicationDbContext())
            {
                Tourist existingTourist = db.Tourists.Find(updatedTourist.TouristID);
                if (existingTourist == null)
                {
                    return Json(new { success = false });
                }
                else
                {
                    existingTourist.Name = updatedTourist.Name;
                    existingTourist.Address = updatedTourist.Address;
                    existingTourist.Email = updatedTourist.Email;
                    existingTourist.Contact = updatedTourist.Contact;
                    db.SaveChanges();
                    return Json(new { success = true });
                }
            }
        }

        //POST Tourist/Delete/1
        [HttpPost]
        public JsonResult Delete(int id)
        {
            using (ApplicationDbContext db = new ApplicationDbContext())
            {
                Tourist tourist = db.Tourists.Find(id);
                if (tourist == null)
                {
                    return Json(new { success = false });
                }
                db.Tourists.Remove(tourist);
                db.SaveChanges();
                return Json(new { success = true });
            }

        }
    }
}