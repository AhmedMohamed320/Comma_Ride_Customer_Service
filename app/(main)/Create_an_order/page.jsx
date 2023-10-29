"use client";
import React, { useState } from "react";
import classes from "./page.module.css";
import FormAddNewCustomers from "@/components/UI/Form/FormAddNewCustomers";
import FormCreateOrder from "@/components/UI/Form/FormCreateOrder";
import Search from "@/components/UI/input/Search";
import Link from "next/link";
import LocationAndState from "@/components/Delivery_men/locationAndState/LocationAndState";
const page = () => {
    const [customerCode, setCustomerCode] = useState("");
    const [customerAddress, setCustomerAddress] = useState("");
    function sendCustomerCode() {
        setCustomerCode(45);
    }

    function sendCustomerAddress() {
        setCustomerAddress("مستشفى حمدي السيد");
    }
    return (
        <section className="mainContainer p-4">
            <p className="text-4xl mb-4 font-semibold">انشاء طلب</p>
            <main className={classes.main}>
                <div className={classes.part1}>
                    <div className={classes.search}>
                        <Search placeholder="ادخل رقم او كود العميل" />
                        <div className={classes.customer}>
                            <div>
                                <Link href="/Customers/Profile">
                                    <p>
                                        الاسم :{" "}
                                        <span className="underline ">
                                            عمر محمد محمد
                                        </span>{" "}
                                        <span>(45)</span>
                                    </p>
                                </Link>
                                <button onClick={sendCustomerCode}>
                                    تاكيد
                                </button>
                            </div>

                            <div>
                                <ul className="flex flex-col gap-4">
                                    <li>
                                        <p>العناوين : </p>
                                    </li>
                                    <li>
                                        -<p>مستشفى حمدي السيد</p>
                                        <button onClick={sendCustomerAddress}>
                                            اختار
                                        </button>
                                    </li>
                                    <li>
                                        -<p>مستشفى حمدي السيد</p>
                                        <button>اختار</button>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <p>
                                    المحفظه : <span>45 ج.م</span>
                                </p>
                            </div>
                            <div>
                                <ul className="flex flex-col gap-4">
                                    <li>
                                        <p>تسعيره خاصه :</p>
                                    </li>
                                    <li>
                                        <span>
                                            1. حى اول - حي تاني :{" "}
                                            <span>45</span>
                                        </span>
                                        <button>اختار</button>
                                    </li>
                                </ul>
                            </div>
                            <p>
                                ملاحظات : <br /> <span>لا يوجد</span>
                            </p>
                        </div>
                    </div>
                    <div className={classes.newCustomer}>
                        <FormAddNewCustomers />
                    </div>
                </div>
                <div className={classes.part2}>
                    <FormCreateOrder
                        customer_code={customerCode}
                        customer_address={customerAddress}
                    />
                </div>
            </main>
            <LocationAndState />
        </section>
    );
};

export default page;
