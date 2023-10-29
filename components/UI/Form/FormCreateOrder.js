import React from "react";
import classes from "./Add Delivery Suppliers/FormAdd_Edit.module.css";
const FormCreateOrder = (props) => {
    return (
        <form
            action=""
            className={`${classes.form} ${classes.createOrder} ${
                props.action === "edit" ? `${classes.edit}` : ""
            }`}
        >
            <div>
                <div>
                    <label htmlFor="n1">كود العميل</label>
                    <input
                        type="number"
                        id="n1"
                        defaultValue={props.customer_code}
                        readOnly
                        placeholder="اكد كود العميل بعد البحث"
                    />
                </div>
                <div>
                    <label htmlFor="n2">نوع الطلب</label>
                    <select name="" id="n2">
                        <option value="">خضار وفاكهه</option>
                        <option value="">كافيه</option>
                        <option value="">اسماك</option>
                        <option value="">لحوم</option>
                        <option value="">صيدليه</option>
                        <option value="">عطاره</option>
                        <option value="">دواجن</option>
                        <option value="">سوبر ماركت</option>
                        <option value="">ماركت</option>
                        <option value="">حرف وادوات</option>
                        <option value="">مطعم</option>
                        <option value="">ورقيات</option>
                        <option value="">اخرى</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="n4">عنوان ( من )</label>
                    <input
                        type="text"
                        id="n4"
                        placeholder="ادخل عنوان الاستلام "
                    />
                </div>
                <div>
                    <label htmlFor="n2">الرقم</label>
                    <input
                        type="number"
                        id="n2"
                        placeholder="ادخل رقم الشخص او المكان المستلم منه  "
                    />
                </div>
                <div>
                    <label htmlFor="n5">عنوان ( الى )</label>
                    <input
                        type="text"
                        id="n5"
                        defaultValue={props.customer_address}
                        placeholder="ادخل عنوان العميل الثاني اذا وجد"
                    />
                </div>
                <div>
                    <label htmlFor="n3">الرقم</label>
                    <input
                        type="number"
                        id="n3"
                        placeholder="ادخل رقم الشخص او المكان المسلم له"
                    />
                </div>

                <div>
                    <label htmlFor="n6">المده المطلوبه </label>
                    <input
                        type="number"
                        id="n6"
                        placeholder="ادخل المده بالدقيقه"
                    />
                </div>
                <div>
                    <label htmlFor="n7">تكلفه التوصيل</label>
                    <input
                        type="number"
                        id="n7"
                        placeholder="ادخل قيمه التحصيل"
                    />
                </div>
                <div>
                    <label htmlFor="n8">نسبه الخصم </label>
                    <input
                        type="number"
                        id="n8"
                        placeholder="ادخل نسبه الخصم"
                    />
                </div>
                <div>
                    <label htmlFor="n15">التكلفه النهائيه</label>
                    <div className="flex gap-4 w-full">
                    <input
                        type="number"
                        id="n15"
                        placeholder="المبلغ المخصومه من محفظه العميل"
                    />
                    <input
                        type="number"
                        
                        placeholder=" المبلغ الواجب اخذه من العميل"
                    />
                    </div>
                </div>
                <div>
                    <label htmlFor="n9">المندوب المسؤول </label>
                    <select name="" id="n9">
                        <option value="">محمد</option>
                        <option value="">محمد</option>
                        <option value="">محمد</option>
                        <option value="">محمد</option>
                        <option value="">التحديد في وقت لاحق</option>
                    </select>
                </div>
                <div>
                    <label> جدوله الطلب </label>
                    <div className="flex gap-4 w-full">
                        <input type="date" />
                        <input type="time" />
                    </div>
                </div>
                <div>
                    <label htmlFor="n10"> ملاحظات </label>
                    <textarea id="n10" placeholder="ادخل نسبه الخصم"></textarea>
                </div>
            </div>
            <button className={classes.add}>
                {props.action === "edit" ? (
                    <p>تاكيد تعديل البيانات</p>
                ) : (
                    <p>تاكيد بيانات الطلب </p>
                )}
            </button>
        </form>
    );
};

export default FormCreateOrder;
