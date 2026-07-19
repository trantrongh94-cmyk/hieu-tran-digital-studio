import type { Metadata } from 'next'

import {
  LegalList,
  LegalNotice,
  LegalPageLayout,
  LegalSection,
} from '@/components/LegalPageLayout'
import { legalConfig, legalUrls } from '@/lib/legal-config'

export const metadata: Metadata = {
  title: 'Điều khoản sử dụng | Hiếu Trần Media & Automation',
  description:
    'Điều khoản sử dụng website, ứng dụng Meta/Facebook, TikTok và workflow n8n do Hiếu Trần Media & Automation vận hành.',
  alternates: {
    canonical: `${legalConfig.websiteUrl}${legalUrls.terms}`,
  },
}

export default function TermsOfServicePage() {
  return (
    <LegalPageLayout
      eyebrow="Terms of Service"
      title="Điều khoản sử dụng"
      description="Các điều khoản dưới đây quy định việc truy cập website và sử dụng các ứng dụng hoặc workflow tự động hóa kết nối với Meta/Facebook, TikTok và những dịch vụ liên quan."
    >
      <LegalNotice>
        Bằng việc kết nối tài khoản, cấp quyền cho ứng dụng hoặc sử dụng workflow
        do {legalConfig.operatorName} vận hành, người dùng xác nhận đã đọc và
        đồng ý với các điều khoản này cùng Chính sách quyền riêng tư hiện hành.
      </LegalNotice>

      <LegalSection id="chap-nhan" title="1. Chấp nhận điều khoản">
        <p>
          Điều khoản áp dụng cho website {legalConfig.websiteName}, các ứng dụng
          do {legalConfig.operatorName} trực tiếp quản lý và các workflow n8n
          được cung cấp để hỗ trợ đăng hoặc quản lý nội dung.
        </p>
        <p>
          Nếu không đồng ý, người dùng không nên cấp quyền ứng dụng hoặc tiếp
          tục sử dụng chức năng liên quan.
        </p>
      </LegalSection>

      <LegalSection id="dich-vu" title="2. Phạm vi dịch vụ">
        <p>Dịch vụ có thể bao gồm:</p>
        <LegalList>
          <li>Kết nối tài khoản Facebook, Facebook Page hoặc TikTok.</li>
          <li>Nhận nội dung, hình ảnh hoặc video do người dùng lựa chọn.</li>
          <li>Đăng trực tiếp, lên lịch hoặc điều phối nội dung qua workflow.</li>
          <li>Ghi nhận trạng thái đăng, mã bài viết và lỗi kỹ thuật.</li>
          <li>
            Hỗ trợ cấu hình n8n, Google Drive, Google Sheets hoặc hạ tầng liên
            quan khi có thỏa thuận riêng.
          </li>
        </LegalList>
        <p>
          Phạm vi thực tế phụ thuộc vào ứng dụng, quyền API được nền tảng phê
          duyệt và cấu hình mà người dùng đã chọn.
        </p>
      </LegalSection>

      <LegalSection id="tai-khoan" title="3. Tài khoản và quyền truy cập">
        <LegalList>
          <li>
            Người dùng phải có quyền hợp pháp đối với tài khoản, Page, nội dung
            và tài sản số được kết nối.
          </li>
          <li>
            Người dùng chịu trách nhiệm bảo mật tài khoản nền tảng, email, thiết
            bị và thông tin xác thực của mình.
          </li>
          <li>
            Người dùng chỉ cấp các quyền cần thiết và có thể thu hồi quyền trong
            phần cài đặt của nền tảng tương ứng.
          </li>
          <li>
            Không được cung cấp token, mật khẩu hoặc quyền truy cập của người
            khác khi chưa có sự cho phép hợp lệ.
          </li>
        </LegalList>
      </LegalSection>

      <LegalSection id="noi-dung" title="4. Nội dung và trách nhiệm của người dùng">
        <p>Người dùng chịu trách nhiệm đối với nội dung được đưa vào hệ thống:</p>
        <LegalList>
          <li>
            Bảo đảm có quyền sử dụng hình ảnh, video, âm thanh, nhãn hiệu và dữ
            liệu cá nhân xuất hiện trong nội dung.
          </li>
          <li>
            Không đăng nội dung vi phạm pháp luật, quyền sở hữu trí tuệ, quyền
            riêng tư hoặc quy định cộng đồng của nền tảng.
          </li>
          <li>
            Không sử dụng hệ thống để spam, lừa đảo, giả mạo, phát tán mã độc,
            né tránh cơ chế kiểm duyệt hoặc thao túng nền tảng.
          </li>
          <li>
            Kiểm tra caption, lịch đăng, tài khoản đích và thiết lập quyền riêng
            tư trước khi xác nhận đăng.
          </li>
        </LegalList>
      </LegalSection>

      <LegalSection id="nen-tang-thu-ba" title="5. Nền tảng và dịch vụ bên thứ ba">
        <p>
          Chức năng phụ thuộc vào API, điều khoản, giới hạn, trạng thái xét duyệt
          và hạ tầng của Meta, TikTok, n8n, Google hoặc nhà cung cấp khác.
        </p>
        <p>
          Các nền tảng có thể thay đổi API, thu hồi quyền, giới hạn tần suất,
          tạm khóa tài khoản hoặc ngừng một chức năng. Chúng tôi không kiểm soát
          và không bảo đảm các dịch vụ bên thứ ba luôn khả dụng.
        </p>
      </LegalSection>

      <LegalSection id="phi" title="6. Chi phí và thỏa thuận dịch vụ">
        <p>
          Một số chức năng hoặc dịch vụ triển khai có thể miễn phí, tính phí một
          lần, tính phí định kỳ hoặc báo giá riêng. Mức phí, phạm vi công việc,
          thời gian bàn giao và hỗ trợ sẽ được xác nhận bằng báo giá hoặc thỏa
          thuận riêng trước khi thực hiện.
        </p>
        <p>
          Chi phí của nền tảng bên thứ ba, hosting, VPS, lưu trữ, tên miền hoặc
          API trả phí không mặc nhiên nằm trong giá dịch vụ trừ khi có xác nhận.
        </p>
      </LegalSection>

      <LegalSection id="so-huu-tri-tue" title="7. Quyền sở hữu trí tuệ">
        <p>
          Người dùng giữ quyền đối với nội dung hợp pháp do mình cung cấp. Người
          dùng cấp quyền kỹ thuật giới hạn để hệ thống nhận, xử lý và truyền nội
          dung đến nền tảng nhằm thực hiện chức năng đã yêu cầu.
        </p>
        <p>
          Mã nguồn, giao diện, tài liệu, cấu hình hoặc workflow do chúng tôi phát
          triển vẫn thuộc chủ sở hữu tương ứng, trừ khi hợp đồng hoặc thỏa thuận
          bàn giao quy định khác.
        </p>
      </LegalSection>

      <LegalSection id="tam-ngung" title="8. Tạm ngừng hoặc chấm dứt">
        <p>
          Chúng tôi có thể tạm ngừng hoặc từ chối cung cấp chức năng khi phát
          hiện dấu hiệu vi phạm, nguy cơ bảo mật, yêu cầu của nền tảng, nghĩa vụ
          pháp lý hoặc hành vi có thể gây ảnh hưởng đến hệ thống và người khác.
        </p>
        <p>
          Người dùng có thể ngừng sử dụng bằng cách thu hồi quyền ứng dụng và
          gửi yêu cầu xóa dữ liệu theo trang{' '}
          <a
            href={legalUrls.deletion}
            className="text-cyan-300 hover:text-cyan-200"
          >
            Hướng dẫn xóa dữ liệu
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection id="bao-dam" title="9. Tính khả dụng và giới hạn bảo đảm">
        <p>
          Dịch vụ được cung cấp trên cơ sở khả năng hiện có. Chúng tôi cố gắng
          duy trì hoạt động ổn định nhưng không bảo đảm hệ thống không gián đoạn,
          không có lỗi hoặc mọi bài đăng đều được nền tảng tiếp nhận và phân
          phối thành công.
        </p>
        <p>
          Người dùng nên duy trì bản sao dữ liệu gốc và kiểm tra kết quả sau mỗi
          hoạt động quan trọng.
        </p>
      </LegalSection>

      <LegalSection id="trach-nhiem" title="10. Giới hạn trách nhiệm">
        <p>
          Trong phạm vi pháp luật cho phép, {legalConfig.operatorName} không chịu
          trách nhiệm cho thiệt hại gián tiếp, mất doanh thu, mất dữ liệu, khóa
          tài khoản, giảm phân phối nội dung hoặc gián đoạn xuất phát từ nền tảng
          bên thứ ba, cấu hình sai, nội dung vi phạm hoặc sự kiện ngoài khả năng
          kiểm soát hợp lý.
        </p>
        <p>
          Điều khoản này không loại trừ trách nhiệm không được phép loại trừ
          theo pháp luật áp dụng.
        </p>
      </LegalSection>

      <LegalSection id="thay-doi" title="11. Thay đổi điều khoản">
        <p>
          Điều khoản có thể được cập nhật để phản ánh thay đổi của dịch vụ, API,
          nền tảng hoặc yêu cầu pháp lý. Ngày cập nhật được hiển thị ở đầu trang.
        </p>
      </LegalSection>

      <LegalSection id="lien-he" title="12. Liên hệ">
        <p>
          Câu hỏi về điều khoản có thể gửi đến{' '}
          <a
            href={`mailto:${legalConfig.privacyEmail}`}
            className="text-cyan-300 hover:text-cyan-200"
          >
            {legalConfig.privacyEmail}
          </a>
          .
        </p>
      </LegalSection>
    </LegalPageLayout>
  )
}
