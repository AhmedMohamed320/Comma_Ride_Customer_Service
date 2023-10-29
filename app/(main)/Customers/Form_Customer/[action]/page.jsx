import FormAddNewCustomers from "@/components/UI/Form/FormAddNewCustomers";
import React from "react";
const page = (props) => {
    return (
        <section className="mainContainer text-center py-4">
            <p className="text-4xl pb-4 font-semibold ">
                {props.params.action == "add"
                    ? "اضافه العميل"
                    : "تعديل بيانات العميل"}
            </p>
            <FormAddNewCustomers action={props.params.action}  />
        </section>
    );
};

export default page;
