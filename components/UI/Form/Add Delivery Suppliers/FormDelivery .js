import React from "react";
import classes from "./FormAdd_Edit.module.css";

const FormAddDelivery = (props) => {
    return (
        <>
            <form action="" className={classes.form}>
                <div>
                    <div>
                        <label htmlFor="n1">الاسم</label>
                        <input
                            type="text"
                            placeholder="ادخل اسم الطيار"
                            id="n1"
                        />
                    </div>

                    <div>
                        <label htmlFor="n2">الرقم القومي</label>
                        <input
                            type="number"
                            placeholder="ادخل الرقم القومي"
                            id="n2"
                        />
                    </div>

                    <div>
                        <label htmlFor="n3">رقم الهاتف</label>
                        <input
                            type="number"
                            placeholder="ادخل رقم الهاتف "
                            id="n3"
                        />
                    </div>

                    <div>
                        <label htmlFor="n13">رقم الهاتف الثاني</label>
                        <input
                            type="number"
                            placeholder="ادخل رقم الهاتف الثاني اذا وجد "
                            id="n3"
                        />
                    </div>

                    <div>
                        <label htmlFor="n12">عنوان المنزل</label>
                        <input
                            type="text"
                            placeholder="ادخل العنوان"
                            id="n12"
                        />
                    </div>

                    <div>
                        <label htmlFor="n4">العمر</label>
                        <input
                            type="number"
                            placeholder="ادخل عمر الطيار"
                            id="n4"
                        />
                    </div>

                    <div>
                        <label htmlFor="n5">تاريخ بدايه العمل</label>
                        <input
                            type="date"
                            placeholder="ادخل  التاريخ"
                            id="n5"
                        />
                    </div>

                    <div>
                        <label htmlFor="n6">الشيفت</label>
                        <select id="n6">
                            <option value="">11:00 - 07:00</option>
                            <option value="">11:00 - 07:00</option>
                            <option value="">11:00 - 07:00</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="n9">يعمل بنسبه</label>
                        <input
                            type="number"
                            placeholder="ادخل  رقم النسبه "
                            id="n9"
                        />
                    </div>
                    <div>
                        <label htmlFor="n10">يعمل بثابت</label>
                        <input
                            type="number"
                            placeholder="ادخل  الرقم بالجنيه المصري"
                            id="n10"
                        />
                    </div>
                    <div>
                        <label htmlFor="n11">قيمه العهده</label>
                        <input
                            type="number"
                            placeholder="ادخل قيمه العهده المسلمه للطيار"
                            id="n11"
                        />
                    </div>
                    <div>
                        <label htmlFor="n7">الصوره الشخصيه</label>
                        <input type="file" id="n7" />
                    </div>
                    <div>
                        <label htmlFor="n8">ملاحظات</label>
                        <textarea type="number" placeholder="اكتب  " id="n8" />
                    </div>
                </div>
                <button className={classes.add}>
                    {props.action === "add" ? "اضافه طيار" : "تاكيد البيانات"}
                </button>
            </form>
        </>
    );
};

export default FormAddDelivery;
