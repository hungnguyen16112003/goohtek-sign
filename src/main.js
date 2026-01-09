import "./style.css";
import html2canvas from "html2canvas";

// Khởi tạo ứng dụng
document.addEventListener("DOMContentLoaded", () => {
  const app = document.querySelector("#app");

  app.innerHTML = `
    <div class="min-h-screen bg-gray-50 py-2  sm:px-6 lg:px-8">
      <div class="max-w-4xl w-full !p-3 lg:!p-6 mx-auto bg-white shadow-lg rounded-lg overflow-hidden border-2 border-gray-300 sm:border-0 contract-paper" style="font-family: 'Times New Roman', serif;">
        <!-- Quốc hiệu và Tiêu ngữ -->
        <div class="text-center mb-6 pt-4">
          <div class="uppercase font-bold text-base mb-2" style="font-size: 14px; letter-spacing: 0.5px;">
            CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM
          </div>
          <div class="font-bold text-sm mb-1" style="font-size: 13px;">
            Độc lập - Tự do - Hạnh phúc
          </div>
          <div class=" w-32 mx-auto mt-2 mb-4"></div>
        </div>

        <!-- Header -->
        <div class="text-center mb-6">
          <h1 class="text-2xl font-bold uppercase" style="font-size: 20px; letter-spacing: 1px;">HỢP ĐỒNG</h1>
        </div>

        <!-- Contract Content -->
        <div class="!p-2 sm:p-8 space-y-6 !mt-4" id="contract-content">
          <!-- Thông tin bên A -->
          <section>
            <h2 class="text-xl font-bold text-gray-800 mb-4 border-b-2 border-gray-300 pb-2">
              BÊN A (BÊN THIẾT KẾ)
            </h2>
            <div class="!space-y-2 text-gray-700 !my-2">
              <p><strong>Địa chỉ:</strong> 160 Đông Hưng Thuận 42, Phường Tân Hưng Thuận, Quận 12, TP. HCM</p>
              <p><strong>Điện thoại:</strong> 0386905265</p>
              <p><strong>Đại diện:</strong> Nguyễn Quốc Hưng</p>
              <p><strong>Tài khoản ngân hàng:</strong> 0386905265 - MB Bank</p>
            </div>
          </section>

          <!-- Thông tin bên B -->
          <section>
            <h2 class="text-xl font-bold text-gray-800 mb-4 border-b-2 border-gray-300 pb-2">
              BÊN B (BÊN THUÊ)
            </h2>
            <div class="!space-y-2 text-gray-700 !my-2">
              <p><strong>Họ và tên:</strong> <input type="text" id="client-name" class="border-b border-gray-300 focus:border-gray-500 focus:outline-none px-2" placeholder="Nhập tên khách hàng" /></p>
              <p><strong>Địa chỉ:</strong> <input type="text" id="client-address" class="border-b border-gray-300 focus:border-gray-500 focus:outline-none px-2" placeholder="Nhập địa chỉ" /></p>
              <p><strong>Điện thoại:</strong> <input type="text" id="client-phone" class="border-b border-gray-300 focus:border-gray-500 focus:outline-none px-2" placeholder="Nhập số điện thoại" /></p>
            </div>
          </section>

          <!-- Thông tin dự án -->
          <section>
            <h2 class="text-xl font-bold text-gray-800 mb-4 border-b-2 border-gray-300 pb-2">
              THÔNG TIN DỰ ÁN
            </h2>
            <div class="space-y-2 text-gray-700">
              <p><strong>Lĩnh vực:</strong> Dịch vụ Marketing &amp; Quảng cáo</p>
              <p><strong>Loại dịch vụ:</strong> Hệ thống tự động hóa quảng cáo và seeding trên Facebook và TikTok</p>
              <p><strong>Thời gian thực hiện:</strong> Theo từng đợt bàn giao từng tool, thời gian cụ thể sẽ được thỏa thuận giữa hai bên</p>
            </div>
          </section>

          <!-- Điều khoản thanh toán -->
          <section>
            <h2 class="text-xl font-bold text-gray-800 mb-4 border-b-2 border-gray-300 pb-2">
              ĐIỀU KHOẢN THANH TOÁN
            </h2>
            <div class="space-y-3 text-gray-700">
              <div class="bg-blue-50 p-4 rounded-lg space-y-1">
                <p class="font-semibold text-lg text-blue-800">
                  Tổng giá trị hợp đồng:
                  <span class="text-2xl text-blue-600">7.000.000 VNĐ</span>
                </p>
              </div>
              <ol class="list-decimal list-inside space-y-2 ml-4">
                <li>
                  <strong>Phương thức thanh toán:</strong>
                 
                </li>
                <li>
                  <strong>Thanh toán theo đợt:</strong>
                  Mỗi khi một tool được hoàn thành và bàn giao, Bên B sẽ thanh toán phần giá trị tương ứng của tool đó theo thỏa thuận giữa hai bên.
                </li>
              </ol>
              <ul class="list-disc list-inside space-y-2 ml-4 pt-2 border-t border-gray-200">
                <li>
                  <strong>Phí dịch vụ phần mềm:</strong>
                  Set up hệ thống đầu tiên chạy quy trình 20 acc.
                </li>
                <li>
                  <strong>Nhân rộng quy trình hoặc bảo trì:</strong>
                  Sau khi chạy ổn, nếu cần nhân rộng quy trình hoặc bảo trì sẽ tính phí phát sinh thêm theo thỏa thuận.
                </li>
              </ul>
            </div>
          </section>

          <!-- Phạm vi công việc -->
          <section>
            <h2 class="text-xl font-bold text-gray-800 mb-4 border-b-2 border-gray-300 pb-2">
              PHẠM VI CÔNG VIỆC
            </h2>
            <div class="space-y-2 text-gray-700">
              <h3 class="font-semibold text-lg mt-4 mb-2">I. TOOLS FACEBOOK</h3>
              <ol class="list-decimal list-inside space-y-2 ml-4">
                <li>
                  <strong>Account Facebook Bác sĩ:</strong>
                  <ul class="list-disc list-inside ml-6 mt-1 space-y-1">
                    <li>Đăng bài lên tường (kèm hình ảnh)</li>
                    <li>Kết bạn với các account đã like của bài chạy quảng cáo khác</li>
                  </ul>
                </li>
                <li>
                  <strong>Account Facebook Seeding:</strong>
                  <ul class="list-disc list-inside ml-6 mt-1 space-y-1">
                    <li>Đăng bài lên group (kèm hình ảnh)</li>
                    <li>Comment vào các bài có key tìm kiếm (ví dụ: Nâng Mũi) kèm hình ảnh</li>
                  </ul>
                </li>
              </ol>

              <h3 class="font-semibold text-lg mt-6 mb-2">II. TOOLS TIKTOK</h3>
              <ol class="list-decimal list-inside space-y-2 ml-4">
                <li>
                  <strong>Account TikTok Bác sĩ:</strong>
                  <ul class="list-disc list-inside ml-6 mt-1 space-y-1">
                    <li>Đăng video</li>
                    <li>Follow những người thích video</li>
                  </ul>
                </li>
                <li>
                  <strong>Account TikTok Seeding:</strong>
                  <ul class="list-disc list-inside ml-6 mt-1 space-y-1">
                    <li>Comment vào các bài hot trend kèm hình ảnh</li>
                  </ul>
                </li>
              </ol>

              <h3 class="font-semibold text-lg mt-6 mb-2">III. TOOLS BỔ TRỢ</h3>
              <ol class="list-decimal list-inside space-y-2 ml-4">
                <li><strong>Tool Kết bạn:</strong> Tự động kết bạn theo yêu cầu</li>
                <li><strong>Tool Join Group:</strong> Tự động tham gia group theo yêu cầu</li>
              </ol>

              <h3 class="font-semibold text-lg mt-6 mb-2">IV. TÀI NGUYÊN</h3>
              <ul class="list-disc list-inside space-y-2 ml-4">
                <li><strong>Account:</strong> 20 account Facebook</li>
                <li><strong>Proxy:</strong> Nếu có sử dụng (theo yêu cầu)</li>
                <li><strong>API ChatGPT:</strong> Sinh bài và comment tự động</li>
              </ul>
            </div>
          </section>

          <!-- Quyền và nghĩa vụ -->
          <section>
            <h2 class="text-xl font-bold text-gray-800 mb-4 border-b-2 border-gray-300 pb-2">
              QUYỀN VÀ NGHĨA VỤ
            </h2>
            <div class="space-y-3 text-gray-700">
              <div>
                <h3 class="font-semibold mb-2">Bên A có trách nhiệm:</h3>
                <ul class="list-disc list-inside space-y-1 ml-4">
                  <li>Thực hiện đúng và đầy đủ các công việc đã cam kết trong hợp đồng</li>
                  <li>Bàn giao dự áns đúng thời hạn và chất lượng</li>
                  <li>Hỗ trợ kỹ thuật trong suốt thời gian Bên B sử dụng dịch vụ của Bên A</li>
                  <li>Cung cấp tài liệu hoặc hướng dẫn sử dụng</li>
                </ul>
              </div>
              <div>
                <h3 class="font-semibold mb-2">Bên B có trách nhiệm:</h3>
                <ul class="list-disc list-inside space-y-1 ml-4">
                  <li>Thanh toán đúng hạn theo các mốc thanh toán đã thỏa thuận</li>
                  <li>Cung cấp đầy đủ thông tin, hình ảnh, nội dung cần thiết cho dự án</li>
                  <li>Phản hồi và duyệt thiết kế trong vòng 03 ngày làm việc</li>
                  <li>Thanh toán đầy đủ khi dự án hoàn thành</li>
                </ul>
              </div>
            </div>
          </section>

          <!-- Điều khoản khác -->
          <section>
            <h2 class="text-xl font-bold text-gray-800 mb-4 border-b-2 border-gray-300 pb-2">
              ĐIỀU KHOẢN KHÁC
            </h2>
            <div class="space-y-2 text-gray-700">
              <ul class="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Cam kết bảo mật:</strong>
                  Bên A cam kết bảo mật thông tin người làm dịch vụ, không tiết lộ thông tin cá nhân, danh tính hoặc bất kỳ thông tin nào liên quan đến người thực hiện dịch vụ cho bất kỳ bên thứ ba nào.
                </li>
                <li>Hợp đồng này có hiệu lực từ ngày ký cho đến khi hoàn thành tất cả các công việc đã thỏa thuận</li>
                <li>Mọi thay đổi về phạm vi công việc hoặc tính năng ngoài phạm vi ban đầu có thể tính thêm phí bổ sung và thời gian bàn giao</li>
                <li>Mọi tranh chấp sẽ được giải quyết thông qua thương lượng, nếu không sẽ đưa ra Tòa án có thẩm quyền</li>
                <li>Hợp đồng được lập thành 02 bản, mỗi bên giữ 01 bản có giá trị pháp lý như nhau</li>
              </ul>
            </div>
          </section>

          <!-- Chữ ký -->
          <section class="mt-8 pt-6 border-t-2 border-gray-300 ">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 !mt-5">
              <div>
                <h3 class="font-bold text-gray-800 mb-4">BÊN A (BÊN THIẾT KẾ)</h3>
                <div class="mt-4">
                  <label class="block text-sm font-medium text-gray-700 mb-4">Chữ ký của Bên A:</label>
                  <div class="border-2 border-gray-300 rounded-lg bg-white overflow-hidden !mt-4">
                    <img
                      src="/chu-ky-ten-hung-funky-signature-ttf.jpeg"
                      alt="Chữ ký Nguyễn Quốc Hưng"
                      class="w-full h-40 object-cover mx-auto"
                    />
                  </div>
                  <p class="text-center font-semibold pt-2 !mt-4">Nguyễn Quốc Hưng</p>
                </div>
              </div>
              <div>
                <h3 class="font-bold text-gray-800 mb-4">BÊN B (BÊN THUÊ)</h3>
                <div class="mt-4">
                  <label class="block text-sm font-medium text-gray-700 mb-2">Ký tên của Bên B:</label>
                  <div class="border-2 border-gray-300 rounded-lg bg-white overflow-hidden !mt-4">
                    <canvas
                      id="signature-canvas"
                      class="w-full h-40 cursor-crosshair touch-none"
                    ></canvas>
                  </div>
                  <p
                    id="client-signature-name"
                    class="text-center font-semibold pt-2 !mt-4"
                  >
                    Đại diện Bên B
                  </p>
                </div>
              </div>
            </div>
            
            <!-- Ngày ký dự án -->
            <div class="!mt-6">
              <p class="text-center text-gray-700">
                <strong>Ngày ký dự án:</strong> 
                <span id="contract-date" class="font-semibold">Chưa ký</span>
              </p>
            </div>
          </section>

          <!-- Nút điều khiển -->
          <div class=" !pt-10 !py-7 px-4 sm:px-6 flex justify-center gap-4 flex-wrap">
            <button id="clear-signature" class="inline-flex items-center gap-2 px-5 py-2.5 bg-white border-2 border-red-300 text-red-600 font-medium rounded-lg hover:bg-red-50 hover:border-red-400 active:scale-95 transition-all duration-200 shadow-sm hover:shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
              Xóa chữ ký
            </button>
            <button id="confirm-btn" class="confirm-btn group inline-flex items-center gap-3 px-10 py-4 text-white font-semibold text-lg rounded-xl active:scale-95 transition-all duration-300 shadow-lg hover:shadow-xl disabled:cursor-not-allowed transform hover:-translate-y-0.5">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 group-hover:scale-110 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Xác Nhận và Lưu Hợp Đồng</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  `;

  // Khởi tạo chức năng ký tên
  initSignatureCanvas();
  initSignatureCanvasA();

  // Hàm format tên - viết hoa chữ cái đầu mỗi từ
  function formatName(name) {
    return name
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }

  // Xử lý cập nhật tên bên B khi nhập
  const clientNameInput = document.getElementById("client-name");
  const clientSignatureName = document.getElementById("client-signature-name");

  if (clientNameInput && clientSignatureName) {
    clientNameInput.addEventListener("input", (e) => {
      const name = e.target.value.trim();
      if (name) {
        // Format tên - viết hoa chữ cái đầu mỗi từ
        clientSignatureName.textContent = formatName(name);
      } else {
        clientSignatureName.textContent = "Đại diện Bên B";
      }
    });
  }

  // Xử lý nút xác nhận
  document
    .getElementById("confirm-btn")
    .addEventListener("click", saveContract);
  document
    .getElementById("clear-signature")
    .addEventListener("click", clearSignature);
});

// Khởi tạo canvas ký tên
function initSignatureCanvas() {
  const canvas = document.getElementById("signature-canvas");
  const ctx = canvas.getContext("2d");

  // Thiết lập kích thước canvas
  function resizeCanvas() {
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = 150;
    ctx.strokeStyle = "#000000";
    ctx.lineWidth = 2;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
  }

  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);

  let isDrawing = false;
  let lastX = 0;
  let lastY = 0;

  // Hàm bắt đầu vẽ
  function startDrawing(e) {
    isDrawing = true;
    const rect = canvas.getBoundingClientRect();
    lastX = (e.touches ? e.touches[0].clientX : e.clientX) - rect.left;
    lastY = (e.touches ? e.touches[0].clientY : e.clientY) - rect.top;
  }

  // Hàm vẽ
  function draw(e) {
    if (!isDrawing) return;
    e.preventDefault();

    const rect = canvas.getBoundingClientRect();
    const currentX = (e.touches ? e.touches[0].clientX : e.clientX) - rect.left;
    const currentY = (e.touches ? e.touches[0].clientY : e.clientY) - rect.top;

    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(currentX, currentY);
    ctx.stroke();

    lastX = currentX;
    lastY = currentY;
  }

  // Hàm dừng vẽ
  function stopDrawing() {
    isDrawing = false;
  }

  // Sự kiện chuột
  canvas.addEventListener("mousedown", startDrawing);
  canvas.addEventListener("mousemove", draw);
  canvas.addEventListener("mouseup", stopDrawing);
  canvas.addEventListener("mouseout", stopDrawing);

  // Sự kiện touch
  canvas.addEventListener("touchstart", startDrawing);
  canvas.addEventListener("touchmove", draw);
  canvas.addEventListener("touchend", stopDrawing);
}

// Khởi tạo canvas chữ ký mặc định cho bên A
function initSignatureCanvasA() {
  const canvas = document.getElementById("signature-canvas-a");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");

  // Thiết lập kích thước canvas
  function resizeCanvas() {
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = 150;

    // Vẽ chữ ký mặc định
    drawDefaultSignature(ctx, canvas.width, canvas.height);
  }

  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);
}

// Vẽ chữ ký mặc định "Hung" - đơn giản, đẹp, tự nhiên dựa trên mẫu thật
function drawDefaultSignature(ctx, width, height) {
  ctx.clearRect(0, 0, width, height);

  // Thiết lập style cho chữ ký - tự nhiên như viết tay
  ctx.strokeStyle = "#000000";
  ctx.lineWidth = 3.0;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";

  const centerY = height / 2;
  const startX = width * 0.15;
  const baseline = centerY + 8;

  ctx.beginPath();

  // === CHỮ "H" VIẾT HOA - Lớn, có nét lên ở đầu ===
  // Nét lên ở đầu chữ H (flourish)
  ctx.moveTo(startX, baseline + 10);
  ctx.quadraticCurveTo(startX - 4, baseline - 28, startX + 8, baseline - 30);
  ctx.quadraticCurveTo(startX + 12, baseline - 28, startX + 10, baseline - 24);

  // Thân chữ H - nét dọc trái
  ctx.moveTo(startX + 8, baseline - 24);
  ctx.lineTo(startX + 8, baseline + 15);

  // Nét ngang của H
  ctx.moveTo(startX + 8, baseline - 6);
  ctx.quadraticCurveTo(startX + 18, baseline - 3, startX + 28, baseline - 6);

  // Thân chữ H - nét dọc phải
  ctx.moveTo(startX + 28, baseline - 24);
  ctx.lineTo(startX + 28, baseline + 15);

  // Vòng lặp xuống của H (graceful loop)
  ctx.moveTo(startX + 28, baseline + 15);
  ctx.quadraticCurveTo(startX + 22, baseline + 22, startX + 16, baseline + 19);
  ctx.quadraticCurveTo(startX + 12, baseline + 16, startX + 14, baseline + 13);

  // === CHỮ "u" - Nối liền với H ===
  ctx.moveTo(startX + 28, baseline - 6);
  ctx.quadraticCurveTo(startX + 36, baseline - 3, startX + 42, baseline);
  ctx.quadraticCurveTo(startX + 45, baseline + 8, startX + 40, baseline + 10);
  ctx.quadraticCurveTo(startX + 38, baseline + 5, startX + 42, baseline + 2);

  // === CHỮ "n" - Nối liền với u ===
  ctx.moveTo(startX + 42, baseline + 2);
  ctx.quadraticCurveTo(startX + 50, baseline, startX + 58, baseline + 2);
  ctx.quadraticCurveTo(startX + 60, baseline + 10, startX + 58, baseline + 12);
  ctx.moveTo(startX + 58, baseline + 2);
  ctx.quadraticCurveTo(startX + 65, baseline, startX + 72, baseline + 3);

  // === CHỮ "g" - Nối liền với n, có vòng lặp dưới baseline ===
  ctx.moveTo(startX + 72, baseline + 3);
  ctx.quadraticCurveTo(startX + 78, baseline + 6, startX + 82, baseline + 10);

  // Vòng lặp dưới baseline của chữ g (đặc trưng)
  ctx.quadraticCurveTo(startX + 85, baseline + 18, startX + 80, baseline + 24);
  ctx.quadraticCurveTo(startX + 75, baseline + 26, startX + 70, baseline + 22);
  ctx.quadraticCurveTo(startX + 68, baseline + 16, startX + 72, baseline + 14);
  ctx.quadraticCurveTo(startX + 78, baseline + 12, startX + 82, baseline + 10);

  // Nét kết thúc của chữ g
  ctx.moveTo(startX + 82, baseline + 10);
  ctx.quadraticCurveTo(startX + 86, baseline + 8, startX + 90, baseline + 6);

  ctx.stroke();
}

// Xóa chữ ký
function clearSignature() {
  const canvas = document.getElementById("signature-canvas");
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// Kiểm tra có chữ ký hay không
function hasSignature() {
  const canvas = document.getElementById("signature-canvas");
  const ctx = canvas.getContext("2d");
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imageData.data;

  for (let i = 0; i < data.length; i += 4) {
    if (data[i + 3] !== 0) {
      return true;
    }
  }
  return false;
}

// Lưu hợp đồng dưới dạng ảnh
async function saveContract() {
  const signatureCanvas = document.getElementById("signature-canvas");

  if (!signatureCanvas) {
    alert("Không tìm thấy canvas chữ ký!");
    return;
  }

  // Kiểm tra thông tin bên B (người thuê) đã nhập đầy đủ chưa
  const clientName = document.getElementById("client-name")?.value.trim();
  const clientAddress = document.getElementById("client-address")?.value.trim();
  const clientPhone = document.getElementById("client-phone")?.value.trim();

  if (!clientName || !clientAddress || !clientPhone) {
    let missingFields = [];
    if (!clientName) missingFields.push("Họ và tên/Công ty");
    if (!clientAddress) missingFields.push("Địa chỉ");
    if (!clientPhone) missingFields.push("Điện thoại");

    alert(
      `Vui lòng nhập đầy đủ thông tin bên B:\n- ${missingFields.join("\n- ")}`
    );
    return;
  }

  if (!hasSignature()) {
    alert("Vui lòng ký tên trước khi xác nhận!");
    return;
  }

  // Cập nhật ngày ký dự án với thời gian hiện tại
  const contractDateElement = document.getElementById("contract-date");
  if (contractDateElement) {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, "0");
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const year = now.getFullYear();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");

    const formattedDate = `Ngày ${day} tháng ${month} năm ${year} lúc ${hours}:${minutes}`;
    contractDateElement.textContent = formattedDate;
  }

  // Ẩn các nút điều khiển trước khi chụp
  const confirmBtn = document.getElementById("confirm-btn");
  const clearBtn = document.getElementById("clear-signature");

  if (!confirmBtn || !clearBtn) {
    alert("Không tìm thấy các nút điều khiển!");
    return;
  }

  const originalConfirmDisplay = confirmBtn.style.display;
  const originalClearDisplay = clearBtn.style.display;

  // Lưu nội dung gốc của nút
  const originalBtnContent = confirmBtn.innerHTML;

  // Disable nút để tránh click nhiều lần
  confirmBtn.disabled = true;

  // Thay đổi nội dung nút để hiển thị trạng thái đang xử lý
  const loadingContent = `
    <svg class="animate-spin h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
    <span>Đang xử lý...</span>
  `;
  confirmBtn.innerHTML = loadingContent;

  confirmBtn.style.display = "none";
  clearBtn.style.display = "none";

  try {
    // Lấy phần tử hợp đồng (toàn bộ card)
    const contractCard = document.querySelector(".max-w-4xl.mx-auto.bg-white");

    if (!contractCard) {
      throw new Error("Không tìm thấy phần tử hợp đồng!");
    }

    // Đợi một chút để đảm bảo DOM đã cập nhật
    await new Promise((resolve) => setTimeout(resolve, 100));

    // Chuyển đổi tất cả các màu oklch sang hex trước khi chụp
    const allElements = contractCard.querySelectorAll("*");
    const originalStyles = new Map();

    allElements.forEach((el) => {
      const computedStyle = window.getComputedStyle(el);
      const styles = {
        color: computedStyle.color,
        backgroundColor: computedStyle.backgroundColor,
        borderColor: computedStyle.borderColor,
        borderTopColor: computedStyle.borderTopColor,
        borderRightColor: computedStyle.borderRightColor,
        borderBottomColor: computedStyle.borderBottomColor,
        borderLeftColor: computedStyle.borderLeftColor,
      };

      originalStyles.set(el, styles);

      // Chuyển đổi màu oklch sang hex
      if (styles.color && styles.color.includes("oklch")) {
        el.style.color = getColorFromClass(el, "color") || "#000000";
      }
      if (styles.backgroundColor && styles.backgroundColor.includes("oklch")) {
        el.style.backgroundColor = getColorFromClass(el, "bg") || "#ffffff";
      }
      if (styles.borderColor && styles.borderColor.includes("oklch")) {
        const borderColor = getColorFromClass(el, "border") || "#d1d5db";
        el.style.borderColor = borderColor;
        el.style.borderTopColor = borderColor;
        el.style.borderRightColor = borderColor;
        el.style.borderBottomColor = borderColor;
        el.style.borderLeftColor = borderColor;
      }
    });

    // Hàm lấy màu từ class name
    function getColorFromClass(element, type) {
      const classList = Array.from(element.classList);
      const colorMap = {
        "text-gray-700": "#374151",
        "text-gray-800": "#1f2937",
        "text-blue-100": "#dbeafe",
        "text-blue-600": "#2563eb",
        "text-blue-800": "#1e40af",
        "text-red-600": "#dc2626",
        "bg-gray-50": "#f9fafb",
        "bg-blue-50": "#eff6ff",
        "bg-white": "#ffffff",
        "border-gray-300": "#d1d5db",
        "border-gray-400": "#9ca3af",
        "border-blue-500": "#3b82f6",
        "border-red-300": "#fca5a5",
        "border-red-400": "#f87171",
      };

      for (const className of classList) {
        if (colorMap[className]) {
          return colorMap[className];
        }
      }
      return null;
    }

    try {
      // Sử dụng html2canvas để chụp toàn bộ hợp đồng
      const canvas = await html2canvas(contractCard, {
        backgroundColor: "#f9fafb",
        scale: 2,
        logging: true, // Bật logging để debug
        useCORS: true,
        allowTaint: false,
        foreignObjectRendering: false, // Tắt foreignObject để tránh lỗi
        removeContainer: true,
        imageTimeout: 15000, // Tăng timeout cho hình ảnh
        windowWidth: contractCard.scrollWidth,
        windowHeight: contractCard.scrollHeight,
        onclone: (clonedDoc) => {
          // Đảm bảo các nút vẫn bị ẩn trong bản clone
          const clonedConfirmBtn = clonedDoc.getElementById("confirm-btn");
          const clonedClearBtn = clonedDoc.getElementById("clear-signature");
          if (clonedConfirmBtn) clonedConfirmBtn.style.display = "none";
          if (clonedClearBtn) clonedClearBtn.style.display = "none";

          // Đảm bảo canvas được render đúng
          const clonedCanvasA = clonedDoc.getElementById("signature-canvas-a");
          const clonedCanvasB = clonedDoc.getElementById("signature-canvas");
          if (clonedCanvasA) {
            clonedCanvasA.style.display = "block";
          }
          if (clonedCanvasB) {
            clonedCanvasB.style.display = "block";
          }
        },
      });

      // Tải xuống ảnh - sử dụng nhiều phương pháp để đảm bảo hoạt động
      const dateStr = new Date().toISOString().split("T")[0];
      const filename = `hop-dong-thiet-ke-website-${dateStr}.png`;
      const dataUrl = canvas.toDataURL("image/png", 1.0);

      // Phát hiện iOS
      const isIOS =
        /iPad|iPhone|iPod/.test(navigator.userAgent) ||
        (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);

      if (isIOS) {
        // Trên iOS: Sử dụng phương pháp hiển thị ảnh và hướng dẫn lưu
        try {
          // Tạo blob từ canvas
          const blob = await new Promise((resolve) => {
            canvas.toBlob(resolve, "image/png", 1.0);
          });

          // Tạo URL object từ blob
          const blobUrl = URL.createObjectURL(blob);

          // Tạo một div overlay để hiển thị ảnh và hướng dẫn
          const overlay = document.createElement("div");
          overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.9);
            z-index: 10000;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 20px;
          `;

          const img = document.createElement("img");
          img.src = blobUrl;
          img.style.cssText = `
            max-width: 100%;
            max-height: 80%;
            object-fit: contain;
            border: 2px solid white;
            border-radius: 8px;
          `;

          const instruction = document.createElement("div");
          instruction.style.cssText = `
            color: white;
            text-align: center;
            margin-top: 20px;
            font-size: 16px;
            padding: 0 20px;
          `;
          instruction.innerHTML = `
            <p style="margin-bottom: 10px;"><strong>Nhấn giữ vào ảnh và chọn "Lưu vào Ảnh"</strong></p>
            <p style="font-size: 14px; opacity: 0.8;">Hoặc nhấn vào nút bên dưới để đóng</p>
          `;

          const closeBtn = document.createElement("button");
          closeBtn.textContent = "Đóng";
          closeBtn.style.cssText = `
            margin-top: 20px;
            padding: 12px 24px;
            background: #2563eb;
            color: white;
            border: none;
            border-radius: 8px;
            font-size: 16px;
            cursor: pointer;
          `;
          closeBtn.onclick = () => {
            document.body.removeChild(overlay);
            URL.revokeObjectURL(blobUrl);
          };

          overlay.appendChild(img);
          overlay.appendChild(instruction);
          overlay.appendChild(closeBtn);
          document.body.appendChild(overlay);

          // Đóng khi click vào overlay (ngoài ảnh)
          overlay.onclick = (e) => {
            if (e.target === overlay) {
              document.body.removeChild(overlay);
              URL.revokeObjectURL(blobUrl);
            }
          };
        } catch (iosError) {
          console.error("Lỗi trên iOS:", iosError);
          // Fallback: Copy vào clipboard
          try {
            const blob = await new Promise((resolve) => {
              canvas.toBlob(resolve, "image/png");
            });
            await navigator.clipboard.write([
              new ClipboardItem({ "image/png": blob }),
            ]);
            alert(
              "Đã copy hợp đồng vào clipboard! Vui lòng dán vào ứng dụng khác để lưu."
            );
          } catch (clipboardError) {
            alert("Vui lòng chụp màn hình để lưu hợp đồng.");
          }
        }
      } else {
        // Trên các thiết bị khác: Sử dụng link download
        try {
          const link = document.createElement("a");
          link.download = filename;
          link.href = dataUrl;
          link.style.display = "none";
          document.body.appendChild(link);
          link.click();

          setTimeout(() => {
            document.body.removeChild(link);
          }, 100);

          alert("Đã lưu hợp đồng thành công!");
        } catch (error) {
          console.error("Lỗi khi tải xuống:", error);
          // Fallback: Mở trong tab mới
          try {
            const newWindow = window.open();
            if (newWindow) {
              newWindow.document.write(
                `<img src="${dataUrl}" style="max-width: 100%; height: auto;" />`
              );
              newWindow.document.title = filename;
              alert(
                "Đã mở hợp đồng trong tab mới. Vui lòng nhấn chuột phải và chọn 'Lưu hình ảnh' để lưu."
              );
            } else {
              throw new Error("Không thể mở tab mới");
            }
          } catch (fallbackError) {
            console.error("Lỗi fallback:", fallbackError);
            alert(
              "Không thể tự động lưu. Vui lòng chụp màn hình hoặc liên hệ hỗ trợ."
            );
          }
        }
      }
    } finally {
      // Khôi phục lại styles gốc
      originalStyles.forEach((styles, el) => {
        if (el.parentNode) {
          el.style.color = "";
          el.style.backgroundColor = "";
          el.style.borderColor = "";
          el.style.borderTopColor = "";
          el.style.borderRightColor = "";
          el.style.borderBottomColor = "";
          el.style.borderLeftColor = "";
        }
      });
    }
  } catch (error) {
    console.error("Lỗi khi lưu hợp đồng:", error);
    alert(
      `Có lỗi xảy ra khi lưu hợp đồng: ${error.message}. Vui lòng thử lại!`
    );
  } finally {
    // Hiện lại các nút điều khiển
    confirmBtn.style.display = originalConfirmDisplay;
    clearBtn.style.display = originalClearDisplay;
    confirmBtn.disabled = false;

    // Khôi phục nội dung nút
    confirmBtn.innerHTML = originalBtnContent;
  }
}
