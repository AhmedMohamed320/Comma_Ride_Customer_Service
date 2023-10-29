import React from "react";
import classes from "./page.module.css";
const page = () => {
    return (
        <section className={`mainContainer ${classes.section}`}>
            <div className={classes.tasks}>
                <p className="text-4xl font-semibold py-4">مهامك اليوم </p>
                <table>
                    <tbody>
                        <tr className={classes.head}>
                            <td>رقم</td>
                            <td>المهمه</td>
                            <td>المده المحدده</td>
                            <td>الحاله</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>انجز المهمه الاتيه</td>
                            <td>5 ساعات</td>
                            <td>معلقه</td>
                        </tr>
                    </tbody>
                </table>
                <p className="text-4xl font-semibold py-4">احصائياتك اليوم </p>
                <table>
                    <tbody>
                        <tr className={classes.head}>
                            <td>عدد المكالمات</td>
                            <td>الاوردرات المنجزه</td>
                            <td> العملاء الجدد</td>
                            <td>الموردين الجدد</td>
                        </tr>
                        <tr>
                            <td>15</td>
                            <td>10</td>
                            <td>5 </td>
                            <td>2</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default page;
