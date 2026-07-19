import type { Metadata } from 'next'

import {
  LegalList,
  LegalNotice,
  LegalPageLayout,
  LegalSection,
} from '@/components/LegalPageLayout'
import { legalConfig, legalUrls } from '@/lib/legal-config'

export const metadata: Metadata = {
  title: 'Hướng dẫn xóa dữ liệu người dùng | Hiếu Trần Media & Automation',
  description:
    'Hướng dẫn thu hồi quyền ứng dụng và yêu cầu xóa dữ liệu liên quan đến các tích hợp Meta/Facebook, TikTok và n8n.',
  alternates: {
    canonical: `${legalConfig.websiteUrl}${legalUrls.deletion}`,
  },
}

export default function DataDeletionPage() {
  const emailSubject = encodeURIComponent('Yêu cầu xóa dữ liệu ứng dụng')
  const emailBody = encodeURIComponent(
    'Họ và tên:\nEmail liên hệ:\nTên ứng dụng hoặc nền tảng:\nFacebook Page/TikTok account liên quan:\nMô tả yêu cầu:\n',
  )

  return (
    <LegalPageLayout
      eyebrow="User Data Deletion"
      title="Hướng dẫn xóa dữ liệu người dùng"
      description="Người dùng có thể thu hồi quyền truy cập trên nền tảng và gửi yêu cầu để chúng tôi xác định, xóa hoặc vô hiệu hóa dữ liệu liên quan đang được hệ thống lưu giữ."
    >
      <LegalNotice>
        Việc gỡ ứng dụng khỏi Facebook hoặc TikTok sẽ ngăn quyền truy cập tiếp
        theo, nhưng không phải lúc nào cũng tự động xóa ngay log hoặc dữ liệu kỹ
        thuật đã được lưu trong hệ thống của nhà phát triển. Vì vậy, người dùng
        nên thực hiện cả bước thu hồi quyền và gửi yêu cầu xóa dữ liệu bên dưới.
      </LegalNotice>

      <LegalSection id="cach-1" title="1. Thu hồi quyền trên Facebook/Meta">
        <LegalList>
          <li>Đăng nhập tài khoản Facebook đã dùng để kết nối ứng dụng.</li>
          <li>
            Mở phần Cài đặt và quyền riêng tư, sau đó vào khu vực Ứng dụng và
            trang web hoặc Tích hợp doanh nghiệp.
          </li>
          <li>Tìm tên ứng dụng đã kết nối và chọn Gỡ/Xóa.</li>
          <li>
            Kiểm tra Page, tài khoản doanh nghiệp hoặc quyền liên quan để bảo
            đảm ứng dụng không còn quyền truy cập.
          </li>
        </LegalList>
        <p>
          Tên và vị trí menu có thể thay đổi theo giao diện Facebook hoặc loại
          tài khoản.
        </p>
      </LegalSection>

      <LegalSection id="cach-2" title="2. Thu hồi quyền trên TikTok">
        <LegalList>
          <li>Đăng nhập tài khoản TikTok đã kết nối.</li>
          <li>Mở Cài đặt và quyền riêng tư.</li>
          <li>
            Tìm phần Bảo mật, Quản lý quyền ứng dụng hoặc ứng dụng đã kết nối.
          </li>
          <li>Chọn ứng dụng liên quan và thu hồi quyền truy cập.</li>
        </LegalList>
        <p>
          Sau khi thu hồi, workflow không thể tiếp tục sử dụng token đó để đăng
          nội dung mới.
        </p>
      </LegalSection>

      <LegalSection id="gui-yeu-cau" title="3. Gửi yêu cầu xóa dữ liệu cho chúng tôi">
        <p>
          Gửi email đến{' '}
          <a
            href={`mailto:${legalConfig.privacyEmail}?subject=${emailSubject}&body=${emailBody}`}
            className="font-semibold text-cyan-300 hover:text-cyan-200"
          >
            {legalConfig.privacyEmail}
          </a>{' '}
          với tiêu đề <strong>“Yêu cầu xóa dữ liệu ứng dụng”</strong>.
        </p>
        <p>Email nên bao gồm:</p>
        <LegalList>
          <li>Họ tên và email có thể dùng để phản hồi.</li>
          <li>Tên ứng dụng hoặc nền tảng liên quan.</li>
          <li>
            Tên hoặc mã Facebook Page, TikTok account hoặc tài khoản đã kết nối.
          </li>
          <li>Mô tả dữ liệu hoặc phạm vi muốn xóa.</li>
          <li>
            Bằng chứng hợp lý chứng minh quyền quản lý tài khoản nếu cần xác minh.
          </li>
        </LegalList>
        <a
          href={`mailto:${legalConfig.privacyEmail}?subject=${emailSubject}&body=${emailBody}`}
          className="mt-2 inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition hover:bg-primary/90"
        >
          Tạo email yêu cầu xóa dữ liệu
        </a>
      </LegalSection>

      <LegalSection id="xu-ly" title="4. Quy trình xử lý yêu cầu">
        <LegalList>
          <li>Tiếp nhận và ghi nhận yêu cầu.</li>
          <li>
            Xác minh danh tính hoặc quyền quản lý trong phạm vi cần thiết để
            tránh xóa nhầm dữ liệu của người khác.
          </li>
          <li>
            Xác định token, thông tin kết nối, cấu hình, nội dung hoặc log liên
            quan có trong hệ thống do chúng tôi trực tiếp kiểm soát.
          </li>
          <li>Xóa, ẩn danh hoặc vô hiệu hóa dữ liệu phù hợp với yêu cầu.</li>
          <li>Gửi phản hồi xác nhận khi hoàn tất hoặc khi cần thêm thông tin.</li>
        </LegalList>
        <p>
          Chúng tôi dự kiến phản hồi hoặc hoàn tất yêu cầu hợp lệ trong vòng{' '}
          <strong>{legalConfig.deletionResponseDays} ngày</strong>, trừ khi cần
          thêm thời gian vì lý do kỹ thuật, xác minh, an toàn hoặc nghĩa vụ pháp
          lý. Khi đó, người yêu cầu sẽ được thông báo nếu có thể.
        </p>
      </LegalSection>

      <LegalSection id="du-lieu-xoa" title="5. Dữ liệu có thể được xóa">
        <LegalList>
          <li>Access token, refresh token hoặc thông tin kết nối đang lưu.</li>
          <li>Mã tài khoản, mã Page và cấu hình liên kết với workflow.</li>
          <li>Nội dung, caption, lịch đăng hoặc file do người dùng tải lên.</li>
          <li>Trạng thái xử lý và log kỹ thuật có thể xác định người dùng.</li>
          <li>Thông tin liên hệ được gửi trong quá trình hỗ trợ.</li>
        </LegalList>
      </LegalSection>

      <LegalSection id="ngoai-pham-vi" title="6. Dữ liệu nằm ngoài phạm vi kiểm soát">
        <p>
          Yêu cầu gửi đến chúng tôi chỉ áp dụng cho dữ liệu do{' '}
          {legalConfig.operatorName} trực tiếp kiểm soát. Nội dung đã đăng trên
          Facebook, TikTok, Google Drive hoặc dịch vụ khác có thể cần được xóa
          riêng trên nền tảng tương ứng.
        </p>
        <p>
          Một số bản ghi có thể được giữ lại khi cần để bảo mật, phòng chống
          gian lận, giải quyết tranh chấp hoặc đáp ứng nghĩa vụ pháp lý. Khi có
          thể, dữ liệu sẽ được giới hạn sử dụng và chỉ lưu trong thời gian cần
          thiết.
        </p>
      </LegalSection>

      <LegalSection id="hoan-tat" title="7. Xác nhận hoàn tất">
        <p>
          Sau khi hoàn tất, chúng tôi sẽ gửi phản hồi đến email mà người dùng đã
          cung cấp. Người dùng có thể cần đăng nhập lại hoặc cấp quyền mới nếu
          muốn sử dụng ứng dụng trong tương lai.
        </p>
      </LegalSection>
    </LegalPageLayout>
  )
}
