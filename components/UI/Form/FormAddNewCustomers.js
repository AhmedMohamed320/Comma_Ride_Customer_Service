"use client";
import React, { useState } from "react";
import classes from "./Add Delivery Suppliers/FormAdd_Edit.module.css";
const FormAddNewCustomers = (props) => {
    const [address, setAddress] = useState([]);

    const handleAddAds = () => {
        setAddress([...address, " "]);
    };

    const handleChangeAds = (e, index) => {
        const updatedItems = [...address];
        updatedItems[index] = e.target.value;
        setAddress(updatedItems);
    };

    // -----------

    const [phone, setPhone] = useState([]);

    const handleAddPhone = () => {
        setPhone([...phone, " "]);
    };

    const handleChangePhone = (e, index) => {
        const updatedItems = [...phone];
        updatedItems[index] = e.target.value;
        setPhone(updatedItems);
    };

    // -----------

    const [specialPricing, setSpecialPricing] = useState([]);

    const handleAddSpecialPricing = () => {
        setSpecialPricing([...specialPricing, { from: "", to: "", price: "" }]);
    };

    const handleChangeSpecialPricing = (e, index) => {
        const updatedItems = [...specialPricing];
        updatedItems[index] = e.target.value;
        setSpecialPricing(updatedItems);
    };

    return (
        <>
            <form action="" className={classes.form}>
                <div>
                    <div>
                        <label htmlFor="n1">الاسم</label>
                        <input
                            type="text"
                            id="n1"
                            placeholder="ادخل اسم العميل"
                        />
                    </div>
                    <div>
                        <label htmlFor="n2">
                            الرقم الاساسي
                            <button type="button" onClick={handleAddPhone}>
                                اضف رقم
                            </button>
                        </label>
                        <input
                            type="number"
                            id="n2"
                            placeholder="ادخل رقم العميل الاول"
                        />
                    </div>
                    {phone.map((num, index) => (
                        <div key={index}>
                            <label htmlFor="n3">رقم 2</label>
                            <input
                                type="number"
                                id="n3"
                                value={num}
                                placeholder="ادخل رقم العميل"
                                onChange={(e) => handleChangePhone(e, index)}
                            />
                        </div>
                    ))}

                    <div>
                        <label htmlFor="n4">
                            العنوان الاساسي
                            <button type="button" onClick={handleAddAds}>
                                اضف عنوان
                            </button>
                        </label>

                        <input
                            type="text"
                            id="n4"
                            placeholder="ادخل عنوان العميل الاول"
                        />
                    </div>
                    {address.map((ads, index) => (
                        <div key={index}>
                            <label>عنوان {index + 2}</label>
                            <input
                                type="text"
                                placeholder="اضف العنوان "
                                value={ads}
                                onChange={(e) => handleChangeAds(e, index)}
                            />
                        </div>
                    ))}

                    <div>
                        <label htmlFor="n10"> المنطقه</label>
                        <select id="n10">
                            <option value="">حى اول</option>
                            <option value="">حى اول</option>
                            <option value="">حى اول</option>
                            <option value="">حى اول</option>
                            <option value="">حى اول</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="n6">محل الاقامه</label>
                        <input
                            type="text"
                            id="n6"
                            placeholder="ادخل محل  اقامه العميل"
                        />
                    </div>
                    <div>
                        <label htmlFor="n7">تاريخ الميلاد</label>
                        <input type="date" id="n7" />
                    </div>
                    <div>
                        <label htmlFor="n8">الوظيفه </label>
                        <input
                            type="text"
                            id="n8"
                            placeholder="ادخل وظيفه العميل"
                        />
                    </div>
                    <div>
                        <label htmlFor="n13">وصلنا عن طريق </label>
                        <select name="" id="n13">
                            <option value="">اعلانات</option>
                            <option value="">سوشيل ميديا</option>
                            <option value="">ترشيح من صديق</option>
                            <option value="">اخرى</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="n12">
                            تسعيره خاصه
                            <button
                                type="button"
                                onClick={handleAddSpecialPricing}
                            >
                                اضف تسعيره
                            </button>
                        </label>
                        <div className="flex w-full gap-4">
                            <input type="text" placeholder="من" />
                            <input type="text" placeholder="الى" />
                            <input type="number" placeholder="السعر" />
                        </div>
                    </div>
                    {specialPricing.map((data, index) => (
                        <div key={index}>
                            <div className="flex w-full gap-4">
                                <input
                                    type="text"
                                    placeholder="من"
                                    value={data.from}
                                    id="from"
                                    onChange={(e) =>
                                        handleChangeSpecialPricing(e, index)
                                    }
                                />
                                <input
                                    type="text"
                                    placeholder="الى"
                                    value={data.to}
                                    id="to"
                                    onChange={(e) =>
                                        handleChangeSpecialPricing(e, index)
                                    }
                                />
                                <input
                                    type="number"
                                    placeholder="السعر"
                                    value={data.price}
                                    id="price"
                                    onChange={(e) =>
                                        handleChangeSpecialPricing(e, index)
                                    }
                                />
                            </div>
                        </div>
                    ))}
                    <div>
                        <label htmlFor="n14">المحفظه </label>
                        <input
                            type="number"
                            id="n14"
                            placeholder="ادخل قيمه محفظه العميل"
                        />
                    </div>
                    <div>
                        <label htmlFor="n9">ملاحظات</label>
                        <textarea name="" id="n9"></textarea>
                    </div>
                </div>
                <button className={classes.add} onClick={props.hide}>
                    {props.action === "edit"
                        ? "تاكيد البيانات"
                        : "اضافه العميل"}
                </button>
            </form>
        </>
    );
};

export default FormAddNewCustomers;
