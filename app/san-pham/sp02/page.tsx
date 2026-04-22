export default function ProductDetailPage() {
  return (
    <main className="min-h-screen bg-[#020817] text-white">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-6">
          <a
            href="/#pricing"
            className="inline-flex items-center text-sm text-cyan-300 hover:text-cyan-200"
          >
            ← Quay lại gian hàng
          </a>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="overflow-hidden rounded-2xl border border-cyan-400/15 bg-[#03182b]">
            <div className="aspect-[4/3] bg-[#07243d]">
              <img
                src="/products/main-2.jpg"
                alt="GÓI 1 GMAIL GEMINI PRO + FAM 2TB DRIVER"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="p-6 sm:p-7">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300/70">
                Sản phẩm
              </p>

              <h1 className="mt-2 text-2xl font-bold leading-tight text-white sm:text-xl">
               NÂNG CẤP GEMINI PRO
              </h1>
              <h1 className="mt-2 text-2xl font-bold leading-tight text-white sm:text-xl">
              ADD DRIVER 2TB FAMILY
              </h1>
            </div>
          </div>

          <div className="rounded-2xl border border-cyan-400/15 bg-[#03182b] p-5 sm:p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300/70">
              Giá bán
            </p>

            <div className="mt-5 rounded-xl border border-cyan-300/10 bg-[#07243d] p-4">
              <p className="text-sm text-cyan-200/70"> 6 Tháng - 1 Năm</p>
              <p className="mt-1 text-3xl font-bold text-cyan-300">
                250.000đ - 350.000đ
              </p>
            </div>

            <p className="mt-5 text-sm leading-7 text-slate-300 sm:text-base">
            TẶNG KEY KÍCH HOẠT TOOL AUTOMATION HIẾU TRẦN
            </p>

            <div className="mt-6 rounded-xl border border-cyan-300/10 bg-[#07243d] p-4">
              <div className="space-y-3 text-sm text-slate-300">
                <div>
                  <span className="font-semibold text-white">Thời hạn gói:</span> Add Mail Chính Chủ Gemini PRO 6-12 Tháng
                </div>
                <div>
                  <span className="font-semibold text-white">Tính năng:</span> Gemini Pro, Family driver 2TB , VEO3 1000 Credit/Tháng
                </div>
                <div>
                  <span className="font-semibold text-white">Bảo hành:</span> Bảo hành trong suốt thời gian sử dụng
                </div>
              </div>

              <div className="mt-4">
                <p className="text-sm font-semibold text-white">Điểm nổi bật</p>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-300">
                  <li>Gemini Pro + Family Driver 2TB + VEO3 1000 Credit/Tháng</li>
                  <li>Hỗ trợ 24/7 - Zalo: 0337.146.134</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://zalo.me/0337146134"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-cyan-300 px-5 text-sm font-bold text-black transition hover:scale-[1.02]"
              >
                Liên hệ mua ngay
              </a>

              <a
                href="/#pricing"
                className="inline-flex h-11 items-center justify-center rounded-full border border-cyan-300/20 px-5 text-sm font-bold text-white transition hover:border-cyan-300/40"
              >
                Xem thêm sản phẩm khác
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-2xl border border-cyan-400/15 bg-[#03182b] p-5 sm:p-6">
          <h2 className="text-xl font-bold text-white">Thông tin chi tiết</h2>

          <div className="mt-4 space-y-4 text-sm leading-7 text-slate-300 sm:text-base">
            <p>* Thời hạn đăng kí: Combo 1 gmail / 6 tháng - 1 năm.</p>
            <p>* Tặng key kích hoạt Tool Automation Hiếu Trần 30 ngày</p>
            <p>* Tài khoản Gemini Pro - Drive 2TB Family VEO3 1000 Credit/Tháng</p>
            <p>- Liên hệ trực tiếp để được báo giá, xác nhận tình trạng hàng và tư vấn đúng nhu cầu sử dụng !</p>
          </div>
        </div>
        
        <div className="mt-8 overflow-hidden rounded-2xl border border-cyan-400/20 bg-[#03182b]">
          <div className="border-b border-cyan-400/10 bg-red-500/10 px-5 py-4 sm:px-6">
            <div className="inline-flex items-center rounded-full border border-red-400/30 bg-red-500/15 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-red-300">
              Lưu ý quan trọng
            </div>
            <h3 className="mt-3 text-lg font-bold text-cyan-200 sm:text-xl">
              Vui lòng đọc kĩ trước khi mua !
            </h3>
            <p className="mt-1 text-sm leading-6 text-slate-300">
              Tránh hiểu nhầm về sản phẩm và quyền lợi
            </p>
          </div>

          <div className="space-y-3 px-5 py-5 text-sm leading-7 text-slate-300 sm:px-6 sm:text-base">
            <li>→ Các sản phẩm có chính sách bảo hành hoặc không tùy theo từng sản phẩm.</li>
            <li>→ Lưu ý vì sản phẩm giá rẻ hoặc phần mềm crack có thể phát sinh lỗi hoặc bị quét trong quá trình sử dụng.</li>
            <li>→ Trong thời gian bảo hành, sẽ được hỗ trợ đổi mới, khắc phục hoặc add lại tài khoản/gmail khác tùy trường hợp.</li>
            <li>→ Sản phẩm đã mua khi shop đã giao hàng sẽ không được hoàn lại tiền.</li>
            <li>→ Vui lòng đọc kỹ hoặc trao đổi trước khi mua để tránh hiểu nhầm về quyền lợi hỗ trợ.</li>
          </div>
        </div>
      </div>
    </main>
  );
}
