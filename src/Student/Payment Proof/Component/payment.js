import "../std_payment-proof.css";

const dummy = {
    time: "2021/08/20（五）19:00~19:30",
    accountNo: "700-00-000000-0",
    consultantSurname: "梁",
    consultantFirstname: "曼",
    consultantSchool: "國立台灣大學",
    consultantMajor: "外國語文學系",
    price: "250",
    actualPrice: "500",
};

const payment =() =>{

    return(
        <div className="std_payment-proof-wrapper">
            <p >提交付款證明</p>
            <p className="std_payment-proof-line"></p>
        </div>
    )
};

export default payment;