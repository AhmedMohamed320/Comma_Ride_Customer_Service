import classes from "./OrderCard.module.css";

const OrderCard = (props) => {
    // const [location, setLocation] = useState(null);

    // useEffect(() => {
    //     if (navigator.geolocation) {
    //         navigator.geolocation.getCurrentPosition(
    //             (position) => {
    //                 const latitude = position.coords.latitude;
    //                 const longitude = position.coords.longitude;
    //                 setLocation([latitude, longitude]);
    //             },
    //             (error) => {
    //                 console.error("Error getting user location:", error);
    //             }
    //         );
    //     } else {
    //         console.error("Geolocation is not supported by this browser.");
    //     }
    // }, []);
    return (
        <div className={classes.order}>
            <div className={classes.head}>
                <p>
                    طلب رقم : <span>1542</span>
                </p>
                <div className={classes.rate}>
                    <p>التقيم :</p>
                    {props.Evaluation ? (
                        <ul className="flex gap-1">
                            <li>
                                <img src="/image/star.png" alt="star" />
                            </li>
                            <li>
                                <img src="/image/star.png" alt="star" />
                            </li>
                            <li>
                                <img src="/image/star.png" alt="star" />
                            </li>
                            <li>
                                <img src="/image/star.png" alt="star" />
                            </li>
                            <li>
                                <img src="/image/star.png" alt="star" />
                            </li>
                        </ul>
                    ) : (
                        <button onClick={props.fromEvaluation}>
                            اجراء التقيم
                        </button>
                    )}
                </div>
                <div className={classes.pending}>
                    {props.edit ? (
                        <p className="cursor-pointer" onClick={props.fromEdit}>
                            تعديل
                        </p>
                    ) : (
                        <p>جاري التوصيل</p>
                    )}
                </div>
            </div>
            <div className={classes.info}>
                <div className={classes.data}>
                    <div>
                        <p>
                            اسم المورد : <span>مطعم ماك</span>
                        </p>
                        <p>
                            رقم المورد : <span>012854758524</span>
                        </p>
                    </div>
                    <div>
                        <p>
                            اسم المستلم : <span>خالد على محمد</span>
                        </p>
                        <p>
                            رقم المستلم : <span>012895758431</span>
                        </p>
                    </div>
                </div>
                <div className={classes.address}>
                    <div>
                        <p>
                            من : <span>شارع مستشفى حمد السيد </span>
                        </p>
                        <a
                            href="https://www.google.com/maps/@30.5972455,31.493617,17.67z?authuser=0&entry=ttu"
                            target="blank"
                            className={classes.image}
                        >
                            <img src="/image/google-maps.png" alt="" />
                        </a>
                    </div>
                    <div>
                        <p>
                            الى : <span>شارع مستشفى حمد السيد </span>
                        </p>
                        <a
                            className={classes.image}
                            href="https://www.google.com/maps/place/30%C2%B035'45.1%22N+31%C2%B029'47.8%22E/@30.5958652,31.4972617,19z/data=!3m1!4b1!4m4!3m3!8m2!3d30.595864!4d31.496618?authuser=0&entry=ttu"
                            target="blank"
                        >
                            <img src="/image/google-maps.png" alt="" />
                        </a>
                    </div>
                </div>

                <div className={classes.moreInfo}>
                    <p>
                        نوع الطلب : <span> خضار </span>
                    </p>
                    <p>
                        يتم التوصيل في : <span>45 دقيقه</span>
                    </p>
                    <p>
                        يتم تحصيل : <span>30 ج.م</span>
                    </p>
                    <p>
                        الطيار : <span>محمد على</span>
                    </p>
                    <p>
                        خدمه العملاء : <span> على</span>
                    </p>
                </div>
                <div className={classes.Notes}>
                    <span>تم ارسال الطلب الساعه 01:00</span>
                    <span>لا يوجد تفاصيل اضافيه</span>
                </div>
            </div>
            <div className={classes.stateOrder}>
                <div className={classes.completed}>
                    <p>جاهز</p>
                </div>
                <div className={classes.pending}>
                    <p>تم الاستلام</p>
                </div>
                <div className={classes.pending}>
                    <p>وصلت</p>
                </div>
                <div className={classes.pending}>
                    <p>تم التسليم</p>
                </div>
                <div className={classes.pending}>
                    <p>عدت</p>
                </div>
            </div>
            <div className={classes.stateOrderTime}>
                <div className={classes.ready}>
                    <p>01:00</p>
                </div>
                <div className={classes.ready_for_pickup}>
                    <p>--:--</p>
                </div>
                <div className={classes.arrived}>
                    <p>--:--</p>
                </div>
                <div className={classes.completed}>
                    <p>--:--</p>
                </div>
                <div className={classes.back}>
                    <p>--:--</p>
                </div>
            </div>
        </div>
    );
};

export default OrderCard;
