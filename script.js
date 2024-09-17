function Add() {
    var pimg = document.querySelector("#img").value;
    var pname = document.querySelector("#name").value;
    var pcode = document.querySelector("#code").value;
    var newprice = document.querySelector("#new").value;
    var oldprice = document.querySelector("#old").value;
    var ptype = document.querySelector("#type").value;

    // Kiểm tra nếu các trường không bị để trống
    if (!pimg || !pname || !pcode || !newprice || !oldprice || !ptype) {
        alert("Vui lòng điền đầy đủ thông tin.");
        return;
    }

    var productType = '';
    if (ptype.toLowerCase() === 'nam') {
        productType = "Thời Trang Nam";
        document.querySelector("#kieu").innerText = productType;
    } else if (ptype.toLowerCase() === 'nu') {
        productType = "Thời Trang Nữ";
        document.querySelector("#kieu").innerText = productType;
    } else {
        // Nếu không phải 'nam' hay 'nu', không thay đổi h1
    }

    // Tạo nội dung HTML cho thẻ card
    var cardHTML = `
        <div class="card" style="width: 15rem; margin: 10px;">
            <img src="${pimg}" class="card-img-top" alt="Product Image" style="height: 200px; object-fit: cover;">
            <div class="card-body">
                <h5 class="card-title">${pname} - (${pcode})</h5>
                <p class="cardprice">${newprice} VND, <s>${oldprice} VND</s></p>
                <button class="btn btn-success" onclick="confirmPurchase('${pname}')">Đặt Mua</button>
            </div>
        </div>
    `;
    document.querySelector("#productCards").innerHTML += cardHTML;
}

function confirmPurchase(productName) {
    var confirmation = confirm(`Bạn có chắc chắn muốn đặt mua sản phẩm "${productName}"?`);
    if (confirmation) {
        alert("Cảm ơn bạn đã đặt hàng!");
    } else {
        alert("Đặt hàng đã bị hủy.");
    }
}