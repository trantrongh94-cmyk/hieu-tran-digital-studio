import type { Metadata } from 'next'

import {
  LegalList,
  LegalNotice,
  LegalPageLayout,
  LegalSection,
} from '@/components/LegalPageLayout'
import { legalConfig, legalUrls } from '@/lib/legal-config'

export const metadata: Metadata = {
  title: 'Chính sách quyền riêng tư | Hiếu Trần Media & Automation',
  description:
    'Chính sách quyền riêng tư áp dụng cho website, ứng dụng Meta/Facebook, TikTok và các workflow n8n do Hiếu Trần Media & Automation vận hành.',
  alternates: {
    canonical: `${legalConfig.websiteUrl}${legalUrls.privacy}`,
  },
}

export default function PrivacyPolicyPage() {
  return (
    <LegalPageLayout
      eyebrow="Privacy Policy"
      title="Chính sách quyền riêng tư"
      description="Chính sách này giải thích loại dữ liệu có thể được xử lý, mục đích sử dụng, cách bảo vệ dữ liệu và quyền của người dùng khi sử dụng các ứng dụng hoặc công cụ tự động hóa do chúng tôi vận hành."
    >
      <LegalNotice>
        Chính sách này áp dụng chung cho website {legalConfig.websiteName}, các
        ứng dụng Meta/Facebook, TikTok và workflow n8n do{' '}
        {legalConfig.operatorName} trực tiếp sở hữu hoặc vận hành. Một ứng dụng
        thuộc khách hàng hoặc một pháp nhân khác cần có chính sách riêng của
        chủ sở hữu thực tế.
      </LegalNotice>

      <LegalSection id="don-vi-van-hanh" title="1. Đơn vị vận hành">
        <p>
          Đơn vị vận hành: <strong>{legalConfig.operatorName}</strong>.
        </p>
        <p>
          Website:{' '}
          <a
            href={legalConfig.websiteUrl}
            className="text-cyan-300 hover:text-cyan-200"
          >
            {legalConfig.websiteName}
          </a>
          .
        </p>
        <p>Khu vực vận hành: {legalConfig.operatingLocation}.</p>
        <p>
          Email tiếp nhận vấn đề quyền riêng tư:{' '}
          <a
            href={`mailto:${legalConfig.privacyEmail}`}
            className="text-cyan-300 hover:text-cyan-200"
          >
            {legalConfig.privacyEmail}
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection id="pham-vi" title="2. Phạm vi áp dụng">
        <p>Chính sách này áp dụng cho:</p>
        <LegalList>
          {legalConfig.appGroups.map((item) => (
            <li key={item}>{item}.</li>
          ))}
          <li>
            Website, biểu mẫu liên hệ và các trang dịch vụ thuộc tên miền{' '}
            {legalConfig.websiteName}.
          </li>
        </LegalList>
      </LegalSection>

      <LegalSection id="du-lieu" title="3. Dữ liệu có thể được xử lý">
        <p>
          Tùy theo quyền mà người dùng chủ động cấp cho từng nền tảng và cấu
          hình của từng workflow, chúng tôi có thể xử lý các nhóm dữ liệu sau:
        </p>
        <LegalList>
          <li>
            Thông tin nhận dạng cơ bản do nền tảng cung cấp, chẳng hạn tên hiển
            thị, mã người dùng, mã tài khoản hoặc ảnh đại diện.
          </li>
          <li>
            Mã Facebook Page, TikTok account hoặc tài khoản mạng xã hội mà
            người dùng đã cho phép kết nối.
          </li>
          <li>
            Access token, refresh token, thời hạn token và thông tin phạm vi
            quyền cần thiết để thực hiện chức năng đã được người dùng cho phép.
          </li>
          <li>
            Nội dung do người dùng cung cấp để đăng tải: tiêu đề, caption,
            hashtag, hình ảnh, video, liên kết và lịch đăng.
          </li>
          <li>
            Trạng thái đăng bài, mã bài đăng, thời gian thực hiện, phản hồi API
            và log lỗi kỹ thuật phục vụ kiểm tra vận hành.
          </li>
          <li>
            Email, số điện thoại hoặc nội dung yêu cầu hỗ trợ khi người dùng
            chủ động liên hệ.
          </li>
        </LegalList>
        <p>
          Chúng tôi không cố ý yêu cầu mật khẩu Facebook hoặc TikTok của người
          dùng. Việc đăng nhập và cấp quyền được thực hiện trên giao diện do nền
          tảng tương ứng cung cấp.
        </p>
      </LegalSection>

      <LegalSection id="muc-dich" title="4. Mục đích sử dụng dữ liệu">
        <LegalList>
          <li>Xác thực và duy trì kết nối với tài khoản được cấp quyền.</li>
          <li>
            Đăng, lên lịch hoặc quản lý nội dung đúng theo thao tác và cấu hình
            của người dùng.
          </li>
          <li>
            Hiển thị trạng thái xử lý, phát hiện lỗi và hỗ trợ khắc phục sự cố.
          </li>
          <li>
            Bảo vệ hệ thống, ngăn truy cập trái phép và duy trì tính ổn định của
            workflow.
          </li>
          <li>
            Liên hệ hỗ trợ khi người dùng gửi yêu cầu hoặc đồng ý nhận phản hồi.
          </li>
        </LegalList>
        <p>
          Dữ liệu và token không được sử dụng để đăng nội dung ngoài phạm vi mà
          người dùng đã cho phép.
        </p>
      </LegalSection>

      <LegalSection id="chia-se" title="5. Chia sẻ dữ liệu và nhà cung cấp dịch vụ">
        <p>
          Chúng tôi không bán hoặc cho thuê dữ liệu cá nhân. Dữ liệu chỉ có thể
          được truyền đến nền tảng hoặc nhà cung cấp kỹ thuật cần thiết để thực
          hiện chức năng mà người dùng yêu cầu, bao gồm:
        </p>
        <LegalList>
          {legalConfig.serviceProviders.map((item) => (
            <li key={item}>{item}.</li>
          ))}
        </LegalList>
        <p>
          Mỗi nền tảng bên thứ ba có điều khoản và chính sách quyền riêng tư
          riêng. Người dùng nên xem các chính sách đó trước khi cấp quyền.
        </p>
      </LegalSection>

      <LegalSection id="token" title="6. Token, bảo mật và lưu trữ">
        <LegalList>
          <li>
            Token và thông tin xác thực được lưu trong credential manager, biến
            môi trường, cơ sở dữ liệu hoặc khu vực cấu hình có kiểm soát truy
            cập khi hệ thống cần lưu chúng.
          </li>
          <li>
            Chúng tôi áp dụng biện pháp hợp lý để hạn chế quyền truy cập, tránh
            công khai token trong mã nguồn, website hoặc nội dung chia sẻ công
            khai.
          </li>
          <li>
            Không có phương thức lưu trữ hoặc truyền dữ liệu nào bảo đảm an
            toàn tuyệt đối. Chúng tôi sẽ xử lý sự cố theo khả năng và nghĩa vụ
            áp dụng.
          </li>
        </LegalList>
      </LegalSection>

      <LegalSection id="thoi-gian-luu" title="7. Thời gian lưu giữ dữ liệu">
        <p>
          Dữ liệu được lưu trong thời gian cần thiết để cung cấp chức năng, xử
          lý lỗi, bảo vệ hệ thống hoặc đáp ứng nghĩa vụ áp dụng. Thời gian cụ thể
          phụ thuộc vào loại dữ liệu và cấu hình của workflow.
        </p>
        <p>
          Token hết hạn, token bị thu hồi và dữ liệu không còn cần thiết sẽ được
          xóa hoặc vô hiệu hóa trong quy trình vận hành hợp lý. Log kỹ thuật có
          thể được giữ trong thời gian giới hạn để chẩn đoán sự cố.
        </p>
      </LegalSection>

      <LegalSection id="quyen-nguoi-dung" title="8. Quyền và lựa chọn của người dùng">
        <LegalList>
          <li>Yêu cầu biết dữ liệu nào đang được hệ thống lưu giữ.</li>
          <li>Yêu cầu chỉnh sửa thông tin không chính xác.</li>
          <li>Thu hồi quyền ứng dụng trên Facebook hoặc TikTok.</li>
          <li>Yêu cầu ngừng xử lý và xóa dữ liệu liên quan.</li>
        </LegalList>
        <p>
          Hướng dẫn chi tiết được công bố tại{' '}
          <a
            href={legalUrls.deletion}
            className="text-cyan-300 hover:text-cyan-200"
          >
            {legalConfig.websiteUrl}
            {legalUrls.deletion}
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection id="tre-em" title="9. Dữ liệu của trẻ em">
        <p>
          Các công cụ của chúng tôi không được thiết kế để chủ động thu thập dữ
          liệu của trẻ em. Người dùng phải đủ tuổi và có năng lực hợp pháp theo
          quy định của nền tảng và pháp luật áp dụng để kết nối tài khoản.
        </p>
      </LegalSection>

      <LegalSection id="thay-doi" title="10. Thay đổi chính sách">
        <p>
          Chính sách có thể được cập nhật khi chức năng, nền tảng tích hợp hoặc
          yêu cầu pháp lý thay đổi. Ngày cập nhật mới nhất được hiển thị ở đầu
          trang. Việc tiếp tục sử dụng dịch vụ sau ngày cập nhật được hiểu là
          người dùng đã xem phiên bản chính sách hiện hành.
        </p>
      </LegalSection>

      <LegalSection id="lien-he" title="11. Liên hệ">
        <p>
          Các câu hỏi về quyền riêng tư hoặc dữ liệu có thể được gửi đến{' '}
          <a
            href={`mailto:${legalConfig.privacyEmail}`}
            className="text-cyan-300 hover:text-cyan-200"
          >
            {legalConfig.privacyEmail}
          </a>
          . Khi liên hệ, vui lòng ghi tên ứng dụng, nền tảng và tài khoản hoặc
          Page liên quan để chúng tôi xác định yêu cầu chính xác.
        </p>
      </LegalSection>
    </LegalPageLayout>
  )
}
