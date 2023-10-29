"use client";
import React, { useState } from "react";
import classes from "./FormAdd_Edit.module.css";
const FormAddSuppliers = (props) => {
    const [address, setAddress] = useState([]);

    const handleAddItem = () => {
        setAddress([...address, " "]);
    };

    const handleChange = (e, index) => {
        const updatedItems = [...address];
        updatedItems[index] = e.target.value;
        setAddress(updatedItems);
    };

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
                        <label htmlFor="n2">رقم الهاتف الاول</label>
                        <input
                            type="number"
                            placeholder="ادخل الرقم "
                            id="n2"
                        />
                    </div>

                    <div>
                        <label htmlFor="n3">رقم الهاتف الثاني</label>
                        <input
                            type="number"
                            placeholder="ادخل الرقم اذا وجد  "
                            id="n3"
                        />
                    </div>

                    <div>
                        <label htmlFor="n4">نوع المكان</label>
                        <select name="" id="n4">
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
                        <label htmlFor="n6">وضع التعاقد</label>
                        <select id="n6">
                            <option value="">عدد الاوردرات اليومي</option>
                            <option value="">اعلانات سوشيل</option>
                            <option value="">شريك</option>
                        </select>
                    </div>
                    <div>
                        <label id="n11">
                            العنوان الاساسي
                            <button type="button" onClick={handleAddItem}>
                                اضف فرع
                            </button>
                        </label>
                        <input type="text" placeholder="اضف العنوان" id="n11" />
                    </div>
                    {address.map((ads, index) => (
                        <div key={index}>
                            <label>
                                <p>العنوان {index + 1}</p>
                            </label>
                            <input
                                type="text"
                                placeholder="اضف عنوان الفرع"
                                value={ads}
                                onChange={(e) => handleChange(e, index)}
                            />
                        </div>
                    ))}
                </div>
                <button className={classes.add}>
                    {props.action === "add" ? "اضافه المورد" : "تاكيد البيانات"}
                </button>
            </form>
        </>
    );
};

export default FormAddSuppliers;
