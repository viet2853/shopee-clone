import { rest } from 'msw'
import config from 'src/constants/config'
import HttpStatusCode from 'src/constants/httpStatusCode.enum'

const purchasesRes = {
  message: 'Lấy đơn mua thành công',
  data: [
    {
      _id: '63ebbf9d6d7c6203408517de',
      buy_count: 1,
      price: 3190000,
      price_before_discount: 3990000,
      status: -1,
      user: '63aafffd6d7c62034084f3c8',
      product: {
        _id: '60afb2c76ef5b902180aacba',
        images: [
          'https://api-ecom.duthanhduoc.com/images/bbea6d3e-e5b1-494f-ab16-02eece816d50.jpg',
          'https://api-ecom.duthanhduoc.com/images/6c4f6bde-6242-40fd-be52-d06033636e04.jpg',
          'https://api-ecom.duthanhduoc.com/images/1385ed69-6843-4edb-a1fb-e5fc795a99e5.jpg',
          'https://api-ecom.duthanhduoc.com/images/7f4f7a5b-b003-462a-a6b9-c0e69175def3.jpg',
          'https://api-ecom.duthanhduoc.com/images/1c323bdd-c0ef-4538-b09d-34c1a4478baa.jpg',
          'https://api-ecom.duthanhduoc.com/images/5054f46f-d317-40f6-a804-6b22dc92e946.jpg',
          'https://api-ecom.duthanhduoc.com/images/eed30991-df2d-41b5-afb2-697a06ba3299.jpg',
          'https://api-ecom.duthanhduoc.com/images/2922fee1-448c-4302-bcc2-804e0fe44f84.jpg',
          'https://api-ecom.duthanhduoc.com/images/84f7bf91-685c-4be9-bd8c-1f0a4e2e21c3.jpg'
        ],
        price: 3190000,
        rating: 4.6,
        price_before_discount: 3990000,
        quantity: 138,
        sold: 1200,
        view: 11046,
        name: 'Điện Thoại Vsmart Active 3 6GB/64GB - Hàng Chính Hãng',
        description:
          '<p>Điện Thoại Vsmart Active 3 6GB/64GB - H&agrave;ng Ch&iacute;nh H&atilde;ng<br />Bộ sản phẩm bao gồm: Th&acirc;n m&aacute;y, sạc, c&aacute;p USB, tai nghe, ốp lưng, dụng cụ lấy sim, s&aacute;ch hướng dẫn sử dụng.</p><p>Chất sang chảnh, chuẩn m&agrave;n h&igrave;nh<br />M&agrave;n h&igrave;nh sống động 6.39 AMOLED tr&agrave;n viền<br />Camera Selfie trượt 16MP ấn tượng, đầy m&ecirc; hoặc<br />Bộ 3 Camera AI 48MP si&ecirc;u chụp b&oacute;ng đ&ecirc;m<br />Thiết kế mặt lưng tr&agrave;n &aacute;nh s&aacute;ng<br />Nổi bật trong đ&ecirc;m sắc m&agrave;u. Lấy cảm hứng từ sắc đ&ecirc;m huyền ảo, được chế t&aacute;c tinh xảo tạo n&ecirc;n mặt lưng 3D chuyển m&agrave;u khi tương t&aacute;c với &aacute;nh s&aacute;ng. Với 4 m&agrave;u sắc Xanh Sapphire, Xanh Lục Bảo, T&iacute;m Ngọc v&agrave; Đen Thạch Anh, sẽ khiến bạn trở bạn trở th&agrave;nh t&acirc;m điểm của sự ch&uacute; &yacute;<br />Thật ấn tượng với camera selfie sẽ tự động bật l&ecirc;n v&agrave; thu lại theo thao t&aacute;c chụp ảnh selfie c&ugrave;ng thuật to&aacute;n l&agrave;m đẹp AI Beauty, ảnh selfie cực k&igrave; th&uacute; vị<br />K&iacute;ch thước 66.25 x 75.62 x 8.83 (mm)<br />Trọng lượng 183 g<br />Camera trước 16MP f/2.2 Popup <br />Camera sau 48MP f/1.7 - Camera chụp đ&ecirc;m<br /> 8MP f/2.2 - Camera g&oacute;c rộng<br /> 2MP f/2.4 - Camera x&oacute;a ph&ocirc;ng <br />Độ ph&acirc;n giải FHD+ ( 1080 x 2340 )<br />Cổng USB USB Type-C<br />Điện Thoại Vsmart Active 3 6GB/64GB - H&agrave;ng Ch&iacute;nh H&atilde;ng</p><p>Cảm ơn qu&yacute; kh&aacute;ch đ&atilde; quan t&acirc;m đến sản phẩm b&ecirc;n shop, qu&yacute; kh&aacute;ch vui l&ograve;ng d&agrave;nh &iacute;t thời gian đọc kĩ ch&iacute;nh s&aacute;ch bảo h&agrave;nh đổi trả:<br />- Sản phẩm được bao test 7 ng&agrave;y kể từ ng&agrave;y nhận được sản phẩm v&agrave; sẽ được đổi m&aacute;y mới c&ugrave;ng model hoặc gi&aacute; trị tương đương sau khi được thẩm định lỗi kĩ thuật.<br />- Sản phẩm lỗi kĩ thuật được x&aacute;c nhận bởi trung t&acirc;m bảo h&agrave;nh ủy quyền ch&iacute;nh h&atilde;ng (bằng văn bản); kh&aacute;ch h&agrave;ng c&oacute; thể gửi lại shop để x&aacute;c nhận lỗi hoặc tới trạm bảo h&agrave;nh gần nhất để thẩm định lỗi.<br />- Sản phẩm đổi trả phải c&ograve;n nguy&ecirc;n hiện trạng m&aacute;y kh&ocirc;ng trầy xước, kh&ocirc;ng bể vỡ, v&ocirc; nước, g&atilde;y ch&acirc;n sim, khung thẻ nhớ&hellip; (tất cả c&aacute;c t&aacute;c động ngoại lực từ ph&iacute;a kh&aacute;ch h&agrave;ng đều TỪ CHỐI BẢO H&Agrave;NH)<br />- Sản phẩm đổi trả phải c&ograve;n nguy&ecirc;n hộp tr&ugrave;ng imei, phụ kiện k&egrave;m theo m&aacute;y kh&ocirc;ng trầy xước, ch&aacute;y nổ, đứt d&acirc;y (nếu trầy xước shop kh&ocirc;ng đổi phụ kiện mới)<br />- Sau 7 ng&agrave;y bao test, sản phẩm vẫn nhận ch&iacute;nh s&aacute;ch bảo h&agrave;nh 18 th&aacute;ng kể từ ng&agrave;y k&iacute;ch hoạt bảo h&agrave;nh (kh&aacute;ch chịu ph&iacute; vận chuyển tới shop bảo h&agrave;nh hộ hoặc tự đến trung t&acirc;m bảo h&agrave;nh gần nhất để được hỗ trợ)<br />- Trong một số trường hợp sản phẩm đ&atilde; được k&iacute;ch hoạt bảo h&agrave;nh điện tử để tham gia chương tr&igrave;nh khuyến m&atilde;i c&oacute; gi&aacute; tốt cho kh&aacute;ch h&agrave;ng. Vui l&ograve;ng chat với nh&acirc;n vi&ecirc;n tư vấn để được hỗ trợ th&ecirc;m th&ocirc;ng tin.<br />- Sản phẩm bị TỪ CHỐI BẢO H&Agrave;NH khi ch&aacute;y nổ, bể vỡ, t&aacute;c động ngoại lực v&agrave;o th&acirc;n v&agrave; b&ecirc;n trong m&aacute;y, c&oacute; thay đổi sửa chữa b&ecirc;n ngo&agrave;i.<br />- C&aacute;c sản phẩm bị kh&oacute;a t&agrave;i khoản như Gmail, Samsung account&hellip; Kh&aacute;ch tự chịu ph&iacute; mở kh&oacute;a nếu kh&ocirc;ng nhớ mật khẩu.<br />Điện Thoại Vsmart Active 3 6GB/64GB - H&agrave;ng Ch&iacute;nh H&atilde;ng<br />#điện_thoại #dienthoai #di_động #didong #điện_thoại_di_động #dien_thoai_di_dong #điện_thoại_ch&iacute;nh_h&atilde;ng #h&agrave;ng_ch&iacute;nh_h&atilde;ng #điện_thoại_gi&aacute;_rẻ #dien_thoai_gia_re #gi&aacute; rẻ #khuyen_mai #freeship #mobile #smartphone #điện_thoại_vsmart #vsmart #vsmart_ active_3</p>',
        category: { _id: '60afafe76ef5b902180aacb5', name: 'Điện thoại', __v: 0 },
        image: 'https://api-ecom.duthanhduoc.com/images/bbea6d3e-e5b1-494f-ab16-02eece816d50.jpg',
        createdAt: '2021-05-27T14:55:03.113Z',
        updatedAt: '2023-02-15T08:49:27.902Z',
        __v: 0
      },
      createdAt: '2023-02-14T17:06:37.926Z',
      updatedAt: '2023-02-14T17:06:37.926Z',
      __v: 0
    },
    {
      _id: '63ebb7ca6d7c6203408517d1',
      buy_count: 1,
      price: 2590000,
      price_before_discount: 3490000,
      status: -1,
      user: '63aafffd6d7c62034084f3c8',
      product: {
        _id: '60afb2426ef5b902180aacb9',
        images: [
          'https://api-ecom.duthanhduoc.com/images/aa374023-7a5b-46ea-aca3-dad1b29fb015.jpg',
          'https://api-ecom.duthanhduoc.com/images/b997dac2-2674-4e20-b5ee-459566b077e7.jpg',
          'https://api-ecom.duthanhduoc.com/images/ac328d77-6014-4a2d-8626-924ac35876df.jpg',
          'https://api-ecom.duthanhduoc.com/images/5061fefa-bded-4fb0-80e5-3623656a4816.jpg',
          'https://api-ecom.duthanhduoc.com/images/02c08a86-4d9b-437b-ae02-f1d49cf2933b.jpg',
          'https://api-ecom.duthanhduoc.com/images/12c405e3-b24f-46ef-8969-54050e1022e9.jpg',
          'https://api-ecom.duthanhduoc.com/images/d448057c-3d3d-45d2-a9bc-e984bc80555f.jpg'
        ],
        price: 2590000,
        rating: 4.2,
        price_before_discount: 3490000,
        quantity: 73,
        sold: 6800,
        view: 5788,
        name: 'Điện thoại OPPO A12 (3GB/32GB) - Hàng chính hãng',
        description:
          '<p>Thể hiện c&aacute; t&iacute;nh của bạn bằng thiết kế kim cương 3D độc đ&aacute;o của OPPO A12, c&ugrave;ng với m&agrave;n h&igrave;nh lớn &ldquo;giọt nước&rdquo; tuyệt mỹ v&agrave; camera k&eacute;p s&agrave;nh điệu, bạn sẽ lu&ocirc;n vui vẻ năng động suốt cả ng&agrave;y.</p><p>Thiết kế si&ecirc;u mỏng nhẹ, họa tiết kim cương 3D ấn tượng<br />OPPO A12 sở hữu thiết kế kh&ocirc;ng chỉ đẹp ph&aacute; c&aacute;ch m&agrave; c&ograve;n rất dễ d&agrave;ng để sử dụng tr&ecirc;n tay. Trọng lượng cực nhẹ 165gram, độ mỏng chỉ 8,3mm kết hợp với những đường bo cong kh&eacute;o l&eacute;o gi&uacute;p điện thoại v&ocirc; c&ugrave;ng gọn nhẹ, mượt m&agrave; trong l&ograve;ng b&agrave;n tay. Kiểu d&aacute;ng của OPPO A12 đặc biệt ấn tượng nhờ điểm nhấn l&agrave; mặt lưng họa tiết 3D kim cương độc đ&aacute;o. Ở mỗi g&oacute;c nh&igrave;n kh&aacute;c nhau, bạn sẽ thấy một vẻ đẹp kh&aacute;c nhau, gi&uacute;p chiếc điện thoại trở n&ecirc;n thực sự nổi bật.</p><p>M&agrave;n h&igrave;nh lớn 6,22 inch &ldquo;giọt nước&rdquo; bảo vệ mắt<br />Bạn sẽ được tận hưởng những h&igrave;nh ảnh hấp dẫn tr&ecirc;n OPPO A12 nhờ m&agrave;n h&igrave;nh lớn k&iacute;ch thước 6,22 inch, hiệu ứng tr&agrave;n viền dạng &ldquo;giọt nước&rdquo; đẹp mắt, tăng cường trải nghiệm xem phim, chơi game.</p><p>Mở kh&oacute;a theo c&aacute;ch của bạn<br />Kh&ocirc;ng cần phải nhập mật khẩu mỗi lần mở m&aacute;y nữa, OPPO A12 cho ph&eacute;p bạn đăng nhập bằng cảm biến v&acirc;n tay hoặc nhận diện khu&ocirc;n mặt AI rất tiện lợi. Chỉ cần chạm nhẹ v&agrave;o khu vực cảm biến mặt lưng hoặc đơn giản l&agrave; đưa m&aacute;y l&ecirc;n, điện thoại sẽ ngay lập tức nhận ra chủ nh&acirc;n của m&aacute;y v&agrave; mở kh&oacute;a một c&aacute;ch sẵn s&agrave;ng.</p><p>Bộ vi xử l&yacute; 8 nh&acirc;n mạnh mẽ<br />OPPO A12 sở hữu cấu h&igrave;nh đ&aacute;ng nể trong tầm gi&aacute; rẻ nhờ bộ vi xử l&yacute; Helio P35. Con chip mới từ nh&agrave; MediaTek sản xuất tr&ecirc;n tiến tr&igrave;nh 12nm với 8 nh&acirc;n cực mạnh, trong đ&oacute; 4 nh&acirc;n 2,35GHz v&agrave; 4 nh&acirc;n 1,8GHz đi c&ugrave;ng GPU đồ họa PowerVR GE8320.</p><p>Thời lượng pin suốt cả ng&agrave;y<br />Mang tr&ecirc;n m&igrave;nh vi&ecirc;n pin dung lượng cực &ldquo;khủng&rdquo; 4230 mAh, bạn c&oacute; thể thoải m&aacute;i sử dụng trong 2 ng&agrave;y ở nhu cầu sử dụng b&igrave;nh thường.</p><p>&Acirc;m thanh sống động<br />OPPO A12 được trang bị t&iacute;nh năng Dirac, một t&iacute;nh năng cho ph&eacute;p chuyển đổi c&aacute;c chế độ &acirc;m thanh th&ocirc;ng minh để tối ưu h&oacute;a &acirc;m thanh dựa tr&ecirc;n t&aacute;c vụ bạn đang hoạt động.</p><p>Camera k&eacute;p AI, tỏa s&aacute;ng trong từng bức ảnh<br />OPPO A12 sở hữu camera k&eacute;p ở mặt sau, bao gồm camera ch&iacute;nh 13MP v&agrave; camera 2MP hỗ trợ đo độ s&acirc;u trường ảnh. Camera ch&iacute;nh chất lượng mang đến những h&igrave;nh ảnh sắc n&eacute;t, r&otilde; r&agrave;ng v&agrave; độ s&aacute;ng, m&agrave;u sắc trung thực.</p><p>Th&ocirc;ng số kỹ thuật chi tiết<br />M&agrave;n h&igrave;nh<br />C&ocirc;ng nghệ m&agrave;n h&igrave;nh : IPS LCD<br />M&agrave;u m&agrave;n h&igrave;nh : 16 triệu m&agrave;u<br />Chuẩn m&agrave;n h&igrave;nh : HD +<br />Độ ph&acirc;n giải m&agrave;n h&igrave;nh : 720 x 1560 Pixels<br />M&agrave;n h&igrave;nh : 6.22 inches<br />Mặt k&iacute;nh m&agrave;n h&igrave;nh : Corning Gorilla Glass 3<br />Camera Trước<br />Độ ph&acirc;n giải : 5 MP<br />Th&ocirc;ng tin kh&aacute;c : Xo&aacute; ph&ocirc;ng, L&agrave;m đẹp (Selfie A.I Beauty), Nh&atilde;n d&aacute;n (AR Stickers), Flash m&agrave;n h&igrave;nh, To&agrave;n cảnh (Panorama), Quay video HD, Chụp bằng cử chỉ, Nhận diện khu&ocirc;n mặt, L&agrave;m đẹp (Beautify), Quay video Full HD, Tự động lấy n&eacute;t (AF), HDR<br />Camera Sau<br />Độ ph&acirc;n giải : Ch&iacute;nh 13 MP &amp; Phụ 2 MP<br />Quay phim : Quay phim HD 720p@30fps<br />Đ&egrave;n Flash : C&oacute;<br />Chụp ảnh n&acirc;ng cao : Google Lens, G&oacute;c si&ecirc;u rộng (Ultrawide), Nh&atilde;n d&aacute;n (AR Stickers), Chụp bằng cử chỉ, Xo&aacute; ph&ocirc;ng, Quay chậm (Slow Motion), Tr&ocirc;i nhanh thời gian (Time Lapse), A.I Camera, L&agrave;m đẹp, Tự động lấy n&eacute;t (AF)<br />Cấu h&igrave;nh phần cứng<br />Tốc độ CPU : 2.3GHz<br />Số nh&acirc;n : 4 nh&acirc;n 2.35 GHz &amp; 4 nh&acirc;n 1.9 GHz<br />Chipset : MediaTek Helio P35 8 nh&acirc;n<br />RAM : 3 GB<br />Chip đồ họa (GPU) : PowerVR GE8320<br />Cảm biến : Cảm biến tiệm cận, Cảm biến &aacute;nh s&aacute;ng, Cảm biến gia tốc kế<br />Bộ nhớ &amp; Lưu trữ<br />Danh bạ lưu trữ : Kh&ocirc;ng giới hạn<br />ROM : 32 GB<br />Bộ nhớ c&ograve;n lại : Đang cập nhật<br />Thẻ nhớ ngo&agrave;i : MicroSD<br />Hỗ trợ thẻ nhớ tối đa : 256 GB<br />Thiết kế &amp; Trọng lượng<br />Kiểu d&aacute;ng : Nguy&ecirc;n Khối<br />Chất liệu : Khung &amp; Mặt lưng nhựa<br />K&iacute;ch thước : D&agrave;i 155.9 mm - Ngang 75.5 mm - D&agrave;y 8.3 mm<br />Trọng lượng : 165 g<br />Khả năng chống nước : Đang cập nhật<br />Th&ocirc;ng tin pin<br />Loại pin : Pin chuẩn Li-Po<br />Dung lượng pin : 4230 mAh<br />Pin c&oacute; thể th&aacute;o rời : Kh&ocirc;ng<br />Chế độ sạc nhanh : Đang cập nhật<br />Kết nối &amp; Cổng giao tiếp<br />Loại SIM : 2 Nano SIM<br />Khe cắm sim : Dual nano-SIM + 1 khe thẻ nhớ<br />Wifi : Wi-Fi 802.11 a/b/g/n/ac, DLNA, Wi-Fi Direct, Wi-Fi hotspot<br />GPS : BDS, A-GPS, GLONASS<br />Bluetooth : Bluetooth 5.0<br />GPRS/EDGE : C&oacute;<br />NFC : Đang cập nhật<br />Cổng sạc : Micro USB<br />Jack (Input &amp; Output) : 3.5mm<br />Giải tr&iacute; &amp; Ứng dụng<br />Xem phim : C&oacute;<br />Nghe nhạc : C&oacute;<br />Ghi &acirc;m : C&oacute;<br />FM radio : C&oacute;<br />Đ&egrave;n pin : C&oacute;<br />Chức năng kh&aacute;c : Đang cập nhật<br />Bảo h&agrave;nh<br />Thời gian bảo h&agrave;nh : 12 Th&aacute;ng<br />Th&ocirc;ng tin h&agrave;ng h&oacute;a<br />Xuất xứ : Trung Quốc<br />Năm sản xuất : 2020<br />Th&ocirc;ng tin d&ograve;ng sản phẩm<br />Model Series : OPPO A12<br />Hệ điều h&agrave;nh<br />Hệ điều h&agrave;nh : ColorOS 6.1.2, nền tảng Android 9<br />Bộ sản phẩm bao gồm: Hộp, Sạc, S&aacute;ch hướng dẫn, C&aacute;p, C&acirc;y lấy sim, Ốp lưng</p><p>Th&ocirc;ng tin bảo h&agrave;nh: <br />Sản phẩm được bảo h&agrave;nh 12 th&aacute;ng tại c&aacute;c trung t&acirc;m bảo h&agrave;nh OPPO<br />- 1 đổi 1 trong 30 ng&agrave;y đầu sử dụng (Lỗi phần cứng sản xuất)<br />- Giao h&agrave;ng tr&ecirc;n to&agrave;n quốc<br />- Hotline: 1800 577 776 (miễn ph&iacute;).</p><p>#OPPO #OPPOA12</p>',
        category: { _id: '60afafe76ef5b902180aacb5', name: 'Điện thoại', __v: 0 },
        image: 'https://api-ecom.duthanhduoc.com/images/aa374023-7a5b-46ea-aca3-dad1b29fb015.jpg',
        createdAt: '2021-05-27T14:52:50.392Z',
        updatedAt: '2023-02-15T08:12:01.581Z',
        __v: 0
      },
      createdAt: '2023-02-14T16:33:14.386Z',
      updatedAt: '2023-02-14T16:33:14.386Z',
      __v: 0
    },
    {
      _id: '63e937256d7c620340851477',
      buy_count: 2,
      price: 244550,
      price_before_discount: 489000,
      status: -1,
      user: '63aafffd6d7c62034084f3c8',
      product: {
        _id: '60afafb76ef5b902180aacb4',
        images: [
          'https://api-ecom.duthanhduoc.com/images/1881b221-e9df-4b91-8d13-9d46c995a5d6.jpg',
          'https://api-ecom.duthanhduoc.com/images/806160a8-f96b-4bfd-bfa5-a821016e5b30.jpg',
          'https://api-ecom.duthanhduoc.com/images/07d99599-bf3e-4b23-baa3-72b81669f5a7.jpg',
          'https://api-ecom.duthanhduoc.com/images/06125fad-e4a5-4a1c-9179-cab3eec4d237.jpg',
          'https://api-ecom.duthanhduoc.com/images/f9a7461e-7d3c-4f21-8a0e-4bb630d543bc.jpg',
          'https://api-ecom.duthanhduoc.com/images/bb01fb3b-a5a6-4a0c-a2cd-97655f074203.jpg',
          'https://api-ecom.duthanhduoc.com/images/21f5ece2-7e35-4d77-832f-e3546848979f.jpg',
          'https://api-ecom.duthanhduoc.com/images/efc35076-3bb6-4527-bdb2-b273db3012bd.jpg'
        ],
        price: 244550,
        rating: 3.8,
        price_before_discount: 489000,
        quantity: 9920,
        sold: 728,
        view: 1772,
        name: 'Đồng Hồ Nam WWOOR 8826 Máy Nhật Dây Thép Mành Cao Cấp - Nhiều Màu',
        description:
          '<p>➫ Kh&aacute;ch h&agrave;ng vui l&ograve;ng đọc r&otilde; th&ocirc;ng tin về sản phẩm để tr&aacute;nh trường hợp mua về kh&ocirc;ng h&agrave;i l&ograve;ng nh&eacute; ^^</p><p>☑ Chất liệu mặt : K&iacute;nh kho&aacute;ng chất (chống xước tốt, đ&aacute;nh b&oacute;ng được) được &eacute;p trong khung th&eacute;p kh&ocirc;ng gỉ<br />☑ Chất liệu d&acirc;y đeo : Th&eacute;p kh&ocirc;ng gỉ<br />☑ Chống nước : 30M - 3ATM<br />☑ Độ d&agrave;y : 0.9 CM<br />☑ Đường k&iacute;nh mặt : 4.1 CM<br />☑ Độ rộng d&acirc;y đeo : 2.2 CM<br />☑ Trọng lượng : 99 gram<br />☑ Lịch ng&agrave;y : C&oacute;<br />☑ Xuất xứ m&aacute;y : M&aacute;y miyota nhật<br />☑ Sản xuất tại : HongKong<br />🕦 Bảo h&agrave;nh : 12 th&aacute;ng (t&iacute;nh từ ng&agrave;y mua h&agrave;ng)<br /> ❃ N&ecirc;n tr&aacute;nh tiếp x&uacute;c với h&oacute;a chất như x&agrave; ph&ograve;ng, nước tẩy rửa, kh&ocirc;ng mang khi bơi lội. Tr&aacute;nh va đập mạnh</p><p>❃ Ch&iacute;nh s&aacute;ch bảo h&agrave;nh:<br />🎁 Được đổi trả sản phẩm trong v&ograve;ng 2 ng&agrave;y kể từ khi nhận được h&agrave;ng nếu sản phẩm bị lỗi do nh&agrave; sản xuất.<br />🎁 Kh&ocirc;ng bảo h&agrave;nh cho c&aacute;c trường hợp: c&aacute;c loại d&acirc;y đeo, kho&aacute;, vỏ, m&agrave;u xi, mặt số, mặt kiếng bị hỏng h&oacute;c, vỡ do sử dụng kh&ocirc;ng đ&uacute;ng, tai nạn, l&atilde;o h&oacute;a tự nhi&ecirc;n, va đập, &hellip; trong qu&aacute; tr&igrave;nh sử dụng.<br />🎁 Kh&ocirc;ng bảo h&agrave;nh hỏng h&oacute;c do hậu quả gi&aacute;n tiếp của việc sử dụng sai hướng dẫn.<br />🎁 Kh&ocirc;ng bảo h&agrave;nh trầy xước về d&acirc;y hoặc mặt kiếng bị trầy xước, vỡ do va chạm trong qu&aacute; tr&igrave;nh sử dụng. <br />🎁 Kh&ocirc;ng bảo h&agrave;ng khi tự &yacute; thay đổi m&aacute;y m&oacute;c b&ecirc;n trong, mở ra can thiệp sửa chữa trong thời gian c&ograve;n bảo h&agrave;nh &ndash; Tại những nơi kh&ocirc;ng phải l&agrave; trung t&acirc;m của h&atilde;ng.</p><p>❖ C&Aacute;C TRƯỜNG HỢP CỤ THỂ CỦA ĐỒNG HỒ CHỐNG NƯỚC :<br />➫ 30M, 3ATM, 3BAR (hoặc chỉ ghi l&agrave; Water Resistance) &ndash; Chỉ chịu nước ở mức rửa tay, đi mưa nhẹ.<br />➫ 50M, 5ATM, 5 BAR &ndash; Được sử dụng trong bơi lội, lặn s&ocirc;ng nước (kh&ocirc;ng sử dụng được trong lặn biển, chơi thể thao mạnh dưới nước&hellip;)<br />➫ 100M, 10 ATM, 10BAR &ndash; Được sử dụng trong bơi lội, lặn v&ugrave;ng s&ocirc;ng nước, lặn biển, kh&ocirc;ng được sử dụng khi chơi thể thao mạnh dưới nước.</p><p>❖ THỜI GIAN GIAO H&Agrave;NG<br />➫ Hcm, B&igrave;nh Dương, Đồng Nai : 1-2 ng&agrave;y<br />➫ H&agrave; Nội, Huế, Đ&agrave; Nẵng : dự kiến 2-4 ng&agrave;y (hoặc c&oacute; thể sớm hơn)<br />➫ C&aacute;c tỉnh th&agrave;nh kh&aacute;c : dự kiến 3-4 ng&agrave;y (hoặc c&oacute; thể sớm hơn)</p><p>❖ ƯU Đ&Atilde;I<br />➫ Giảm gi&aacute; khi mua h&agrave;ng lần 2<br />➫ Qu&agrave; tặng khi mua h&agrave;ng lần 2<br />➫ Mua 10 tặng 1</p><p><br />❖ CH&Uacute; &Yacute; : Hiện c&oacute; 1 số c&aacute; nh&acirc;n lấy h&igrave;nh ảnh v&agrave; phần chi tiết của shop H&agrave;ng Ch&iacute;nh Hiệu đăng b&aacute;n c&aacute;c sản phẩm tương tự nhưng với chất lượng v&agrave; gi&aacute; th&agrave;nh thấp hơn rất nhiều. Rất mong qu&yacute; kh&aacute;ch h&agrave;ng c&oacute; lựa chọn s&aacute;ng suốt khi mua h&agrave;ng.</p><p>&clubs; HƯỚNG DẪN LẤY M&Atilde; GIẢM GI&Aacute; VẬN CHUYỂN TRƯỚC KHI ĐẶT H&Agrave;NG:<br />BƯỚC 1: V&agrave;o trang chủ shopee =&gt; mục giảm gi&aacute; =&gt; lấy m&atilde; <br />BƯỚC 2: Nhấn v&agrave;o m&atilde; giảm gi&aacute; trong giỏ h&agrave;ng khi tiến h&agrave;nh thanh to&aacute;n<br />BƯỚC 3: M&atilde; miễn ph&iacute; vận chuyển được tự động chọn, bạn c&oacute; thể chọn th&ecirc;m m&atilde; giảm gi&aacute; kh&aacute;c (nếu c&oacute;) v&agrave; bấm OK để được ưu đ&atilde;i cho đơn h&agrave;ng<br />BƯỚC 4: Tiến h&agrave;nh thanh to&aacute;n cho đơn h&agrave;ng sau khi chọn m&atilde; giảm gi&aacute; <br />LƯU &Yacute;: 1 đơn h&agrave;ng được d&ugrave;ng tối đa 1 m&atilde; miễn ph&iacute; vận chuyển v&agrave; 1 m&atilde; giảm gi&aacute; loại kh&aacute;c</p>',
        category: { _id: '60afacca6ef5b902180aacaf', name: 'Đồng hồ', __v: 0 },
        image: 'https://api-ecom.duthanhduoc.com/images/1881b221-e9df-4b91-8d13-9d46c995a5d6.jpg',
        createdAt: '2021-05-27T14:41:59.307Z',
        updatedAt: '2023-02-15T08:12:08.730Z',
        __v: 0
      },
      createdAt: '2023-02-12T18:59:49.405Z',
      updatedAt: '2023-02-14T16:33:20.404Z',
      __v: 0
    },
    {
      _id: '63e9368e6d7c620340851476',
      buy_count: 4,
      price: 229000,
      price_before_discount: 399000,
      status: -1,
      user: '63aafffd6d7c62034084f3c8',
      product: {
        _id: '60afad846ef5b902180aacb0',
        images: [
          'https://api-ecom.duthanhduoc.com/images/a04c55a2-9569-4a59-a6de-2b3bbdcb570a.jpg',
          'https://api-ecom.duthanhduoc.com/images/7d131757-51eb-43af-bc2a-4eb479186fc9.jpg',
          'https://api-ecom.duthanhduoc.com/images/89ca357b-cd4a-4389-b290-166bb78a987b.jpg',
          'https://api-ecom.duthanhduoc.com/images/869051b5-ce64-4107-82d1-891daa969700.jpg',
          'https://api-ecom.duthanhduoc.com/images/7586bd50-7d86-4fd9-b728-812753fdbe8d.jpg',
          'https://api-ecom.duthanhduoc.com/images/aaf5a147-d8f9-44dd-914c-ba52298fd354.jpg',
          'https://api-ecom.duthanhduoc.com/images/df1c6c76-3658-4657-a678-ca53197cef7e.jpg',
          'https://api-ecom.duthanhduoc.com/images/b117fb99-cc14-4090-9e12-1f269485b80d.jpg',
          'https://api-ecom.duthanhduoc.com/images/cb4f7da2-267f-4dc7-bd6e-aab30e04067a.jpg'
        ],
        price: 229000,
        rating: 5,
        price_before_discount: 399000,
        quantity: 100123,
        sold: 31500,
        view: 4720,
        name: 'Đồng Hồ Nam WWOOR 8018 Dây Thép Nhật Cao Cấp Nhiều Màu',
        description:
          '<p>➫ Kh&aacute;ch h&agrave;ng vui l&ograve;ng đọc r&otilde; th&ocirc;ng tin về sản phẩm để tr&aacute;nh trường hợp mua về kh&ocirc;ng h&agrave;i l&ograve;ng nh&eacute; ^^</p><p>☑ Chất liệu mặt k&iacute;nh đồng hồ nam : K&iacute;nh kho&aacute;ng chất (chống xước tốt, đ&aacute;nh b&oacute;ng được) được &eacute;p trong khung th&eacute;p kh&ocirc;ng gỉ<br />☑ Chất liệu d&acirc;y đeo đồng hồ nam: Th&eacute;p kh&ocirc;ng gỉ<br />☑ Chống nước : 30M<br />☑ Độ d&agrave;y đồng hồ nam : 0.7CM<br />☑ Đường k&iacute;nh mặt đồng hồ nam : 3.8 CM<br />☑ Độ rộng d&acirc;y đeo đồng hồ nam : 2 CM<br />☑ Trọng lượng : 72gram<br />🕦 Bảo h&agrave;nh : 12 th&aacute;ng (t&iacute;nh từ ng&agrave;y mua h&agrave;ng)</p><p>❃ N&ecirc;n tr&aacute;nh tiếp x&uacute;c đồng hồ nam 8018 với h&oacute;a chất như x&agrave; ph&ograve;ng, nước tẩy rửa, kh&ocirc;ng mang khi bơi lội. Tr&aacute;nh va đập mạnh</p><p>❃ Ch&iacute;nh s&aacute;ch bảo h&agrave;nh:<br />🎁 Được đổi trả sản phẩm trong v&ograve;ng 2 ng&agrave;y kể từ khi nhận được h&agrave;ng nếu sản phẩm bị lỗi do nh&agrave; sản xuất.<br />🎁 Kh&ocirc;ng bảo h&agrave;nh đồng hồ cho c&aacute;c trường hợp: c&aacute;c loại d&acirc;y đeo, kho&aacute;, vỏ, m&agrave;u xi, mặt số, mặt kiếng bị hỏng h&oacute;c, vỡ do sử dụng kh&ocirc;ng đ&uacute;ng, tai nạn, l&atilde;o h&oacute;a tự nhi&ecirc;n, va đập, &hellip; trong qu&aacute; tr&igrave;nh sử dụng.<br />🎁 Kh&ocirc;ng bảo h&agrave;nh đồng hồ hỏng h&oacute;c do hậu quả gi&aacute;n tiếp của việc sử dụng sai hướng dẫn.<br />🎁 Kh&ocirc;ng bảo h&agrave;nh đồng hồ trầy xước về d&acirc;y hoặc mặt kiếng bị trầy xước, vỡ do va chạm trong qu&aacute; tr&igrave;nh sử dụng. <br />🎁 Kh&ocirc;ng bảo h&agrave;ng đồng hồ khi tự &yacute; thay đổi m&aacute;y m&oacute;c b&ecirc;n trong, mở ra can thiệp sửa chữa trong thời gian c&ograve;n bảo h&agrave;nh &ndash; Tại những nơi kh&ocirc;ng phải l&agrave; trung t&acirc;m của h&atilde;ng.</p><p>❖ C&Aacute;C TRƯỜNG HỢP CỤ THỂ CỦA ĐỒNG HỒ CHỐNG NƯỚC :<br />➫ 30M, 3ATM, 3BAR (hoặc chỉ ghi l&agrave; Water Resistance) &ndash; Chỉ chịu nước ở mức rửa tay, đi mưa nhẹ.<br />➫ 50M, 5ATM, 5 BAR &ndash; Được sử dụng trong bơi lội, lặn s&ocirc;ng nước (kh&ocirc;ng sử dụng được trong lặn biển, chơi thể thao mạnh dưới nước&hellip;)<br />➫ 100M, 10 ATM, 10BAR &ndash; Được sử dụng trong bơi lội, lặn v&ugrave;ng s&ocirc;ng nước, lặn biển, kh&ocirc;ng được sử dụng khi chơi thể thao mạnh dưới nước.</p><p>❖ THỜI GIAN GIAO H&Agrave;NG<br />➫ Hcm, B&igrave;nh Dương, Đồng Nai : 1-2 ng&agrave;y<br />➫ H&agrave; Nội, Huế, Đ&agrave; Nẵng : dự kiến 2-4 ng&agrave;y (hoặc c&oacute; thể sớm hơn)<br />➫ C&aacute;c tỉnh th&agrave;nh kh&aacute;c : dự kiến 3-4 ng&agrave;y (hoặc c&oacute; thể sớm hơn)</p><p>❖ ƯU Đ&Atilde;I<br />➫ Giảm gi&aacute; khi mua h&agrave;ng lần 2<br />➫ Qu&agrave; tặng khi mua h&agrave;ng lần 2<br />➫ Mua 10 tặng 1</p><p>&clubs; HƯỚNG DẪN LẤY M&Atilde; GIẢM GI&Aacute; VẬN CHUYỂN TRƯỚC KHI ĐẶT H&Agrave;NG:<br />BƯỚC 1: V&agrave;o trang chủ shopee =&gt; mục giảm gi&aacute; =&gt; lấy m&atilde; <br />BƯỚC 2: Nhấn v&agrave;o m&atilde; giảm gi&aacute; trong giỏ h&agrave;ng khi tiến h&agrave;nh thanh to&aacute;n<br />BƯỚC 3: M&atilde; miễn ph&iacute; vận chuyển được tự động chọn, bạn c&oacute; thể chọn th&ecirc;m m&atilde; giảm gi&aacute; kh&aacute;c (nếu c&oacute;) v&agrave; bấm OK để được ưu đ&atilde;i cho đơn h&agrave;ng<br />BƯỚC 4: Tiến h&agrave;nh thanh to&aacute;n cho đơn h&agrave;ng sau khi chọn m&atilde; giảm gi&aacute; <br />LƯU &Yacute;: 1 đơn h&agrave;ng được d&ugrave;ng tối đa 1 m&atilde; miễn ph&iacute; vận chuyển v&agrave; 1 m&atilde; giảm gi&aacute; loại kh&aacute;c<br />#đồnghồ #đồnghồnam #đồnghồđẹp #đồnghồthờitrang #thờitrangnam #WWOOR #đồnghồwwoor #đồnghồch&iacute;nhh&atilde;ng</p>',
        category: { _id: '60afacca6ef5b902180aacaf', name: 'Đồng hồ', __v: 0 },
        image: 'https://api-ecom.duthanhduoc.com/images/a04c55a2-9569-4a59-a6de-2b3bbdcb570a.jpg',
        createdAt: '2021-05-27T14:32:36.605Z',
        updatedAt: '2023-02-15T06:58:02.329Z',
        __v: 0
      },
      createdAt: '2023-02-12T18:57:18.297Z',
      updatedAt: '2023-02-12T18:57:28.909Z',
      __v: 0
    },
    {
      _id: '63e936846d7c620340851475',
      buy_count: 12,
      price: 300000,
      price_before_discount: 450000,
      status: -1,
      user: '63aafffd6d7c62034084f3c8',
      product: {
        _id: '60afaf286ef5b902180aacb3',
        images: [
          'https://api-ecom.duthanhduoc.com/images/ffa092a6-c35e-4de3-b955-99f368f57546.jpg',
          'https://api-ecom.duthanhduoc.com/images/c8a8c12e-aef6-436b-b114-4db528ca3542.jpg',
          'https://api-ecom.duthanhduoc.com/images/0d3a7e41-f0b8-47aa-843b-db994f661682.jpg',
          'https://api-ecom.duthanhduoc.com/images/517e6837-beb7-4c8a-8df0-259f267828dd.jpg',
          'https://api-ecom.duthanhduoc.com/images/ea3c7cdf-71c5-4e0b-9a0e-1305737b5aee.jpg',
          'https://api-ecom.duthanhduoc.com/images/264418f7-f239-4405-82bf-b2e0ec05891d.jpg',
          'https://api-ecom.duthanhduoc.com/images/fd5c8918-ef84-4bf8-b20f-bb514e415686.jpg',
          'https://api-ecom.duthanhduoc.com/images/f6cb802c-9a43-4804-9a30-e56be8e41a19.jpg',
          'https://api-ecom.duthanhduoc.com/images/133ec1a8-fe1f-4ffe-a7a9-28880de79838.jpg'
        ],
        price: 300000,
        rating: 5,
        price_before_discount: 450000,
        quantity: 4034,
        sold: 2400,
        view: 1114,
        name: 'Đồng Hồ Nam CRRJU CR8940 Dây Thép Cao Cấp',
        description:
          '<p>TH&Ocirc;NG TIN SẢN PHẨM <br />- Thương hiệu đồng hồ: CRRJU<br />- K&iacute;nh thước mặt: 40mm<br />- Độ d&agrave;y: 7mm<br />- Chiều d&agrave;i d&acirc;y: 24cm<br />- Chiều rộng d&acirc;y: 20mm<br />- Bộ m&aacute;y: Time Module quartz movement (Japan Made)<br />- Mặt k&iacute;nh: Hardlex<br />- Chống nước: 3ATM (rửa tay, đi mưa)<br />- Bảo h&agrave;nh: 12 th&aacute;ng<br />Lưu &yacute;: KH&Ocirc;NG nhấn n&uacute;t trong nước hoặc sử dụng c&aacute;c hoạt động dưới nước trong thời gian d&agrave;i như bơi lặn, ng&acirc;m...<br />#A100</p>',
        category: { _id: '60afacca6ef5b902180aacaf', name: 'Đồng hồ', __v: 0 },
        image: 'https://api-ecom.duthanhduoc.com/images/ffa092a6-c35e-4de3-b955-99f368f57546.jpg',
        createdAt: '2021-05-27T14:39:36.099Z',
        updatedAt: '2023-02-15T04:23:53.553Z',
        __v: 0
      },
      createdAt: '2023-02-12T18:57:08.891Z',
      updatedAt: '2023-02-12T19:00:02.237Z',
      __v: 0
    }
  ]
}

const purchasesRequest = rest.get(`${config.baseUrl}purchases`, (req, res, ctx) => {
  return res(ctx.status(HttpStatusCode.Ok), ctx.json(purchasesRes))
})

const purchasesRequests = [purchasesRequest]

export default purchasesRequests
