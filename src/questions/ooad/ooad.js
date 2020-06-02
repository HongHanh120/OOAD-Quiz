export const questions2 = [{
    cont: "Các lớp phân tích phát triển thành ____ (Chọn hai)",
    answers: [
        "Các lớp thiết kế",
        "Các hệ thống con",
        "Các hiện thực hóa ca sử dụng",
        "Các gói thiết kế (design packages)",
        "Kiến trúc"
    ],
    corrects: [0, 1]
},
    {
        cont: "Chuyện gì xảy ra khi một lớp cha thay đổi?",
        answers: [
            "Tất cả các class con thay đổi",
            "Các operations của các class con thay đổi",
            "Các phương thức được thêm trong class con mà không có trong class cha phải thay đổi",
            "Chỉ có các phương thức được kế thừa từ class cha thay đổi"
        ],
        corrects: [0]
    },
    {
        cont: "Phát biểu nào là đúng với hiện thực hóa ca sử dụng?",
        answers: [
            "Liệt kê các bước khác nhau mà 1 ca sử dụng thực hiện",
            "Nó được tạo ra bởi người phân tích hệ thống",
            "Nó là một phần trong Đặc tả yêu cầu phần mềm",
            "Thẩm định sự tương ứng từ phân tích và thiết kế với đặc tả yêu cầu"
        ],
        corrects: [3]
    },
    {
        cont: "Trạng thái nào KHÔNG chứa trạng thái khác?",
        answers: [
            "Top State",
            "Composite State",
            "Simple State",
            "Bottom State"
        ],
        corrects: [2]
    },
    {
        cont: "Phát biểu nào là đúng về việc nhóm các thành phần vào một gói?",
        answers: [
            "Các thành phần trong cùng một gói nên chia sẻ logic, giải pháp chung",
            "Các gói nên chứa một số lượng nhỏ các thành phần để tránh nhầm lẫn",
            "Các gói chỉ nên được sử dụng cho các dự án lớn đòi hỏi một số lượng lớn các thành phần",
            "Các gói không nên chứa các gói khác"
        ],
        corrects: [0]
    },
    {
        cont: "Có ba phân nhóm cơ chế kiến trúc bao gồm: (Chọn ba)",
        answers: [
            "Các cơ chế phân tích",
            "Các cơ chế yêu cầu",
            "Các cơ chế cài đặt",
            "Các cơ chế thiết kế"
        ],
        corrects: [0, 2, 3]
    },
    {
        cont: "Trong biểu đồ tuần tự, những gì có thể được xác định bởi các tương tác giữa các thành phần ?",
        answers: [
            "Chỉ có các dịch vụ được cung cấp bởi một giao diện",
            "Chỉ có các dịch vụ được yêu cầu bởi một giao diện",
            "Các dịch vụ được cung cấp và yêu cầu bởi một giao diện",
            "Tên của giao diện"
        ],
        corrects: [2]
    },
    {
        cont: "Khung nhìn nào tập trung vào hiện thực hóa vật lý của hệ thống ?",
        answers: [
            "Khung logic",
            "Khung cài đặt",
            "Khung tiến trình",
            "Khung ca sử dụng"
        ],
        corrects: [1]
    },
    {
        cont: "Phát biểu nào là đúng về một active object?",
        answers: [
            "Nó là một object độc lập có thể giao tiếp với các active object khác một cách không đồng bộ",
            "Nó không chứa trạng thái",
            "Nó phụ thuộc vào việc thực hiện toàn bộ hệ thống",
            "Nó không có cấu trúc để cho phép lớp được thao tác dễ dàng"
        ],
        corrects: [0]
    },
    {
        cont: "Trong khâu Phân tích ca sử dụng, hành vi nào được phân bố cho các lớp điều khiển?",
        answers: [
            "Hành vi đặc thù của ca sử dụng hoặc một phần của luồng sự kiện quan trọng",
            "Hành vi liên quan đến dữ liệu được bao gói trong các trừu tượng",
            "Hành vi liên quan đến giao tiếp với tác nhân",
            "Hành vi đặc thù về quy tắc nghiệp vụ hoặc luồng nghiệp vụ"
        ],
        corrects: [0]
    },
    {
        cont: "Ba nguồn để xác định Trừu tượng chính là gì? (Chọn ba)",
        answers: [
            "Kiến thức nghiệp vụ",
            "Yêu cầu",
            "Lớp thiết kế",
            "Bảng thuật ngữ"
        ],
        corrects: [0, 1, 3]
    },
    {
        cont: "Đâu là một tên của object trong UML?",
        answers: [
            "Matt:Employee",
            ":Employee",
            "Matt::Employee",
            "::employee"
        ],
        corrects: [0]
    },
    {
        cont: "Trong Phân tích ca sử dụng, một thuộc tính nên được sử dụng thay vì một lớp khi thông tin ___",
        answers: [
            "được truy cập bởi các operations mà chỉ get, set, hoặc chuyển đổi đơn giản",
            "có liên quan đến các thực thể trong mô hình doanh nghiệp hoặc nghiệp vụ",
            "cần được ẩn khỏi các phần khác của Mô hình phân tích và không được chia sẻ",
            "được nhắc đến và sử dụng nhiều lần trong suốt quá trình thực hiện ca sử dụng"
        ],
        corrects: [0]
    },
    {
        cont: "Khung nhìn 4+1 nào dưới đây tập trung vào khâu Mô tả Phân tán?",
        answers: [
            "Khung Logic",
            "Khung Triển khai",
            "Khung ca sử dụng",
            "Khung cài đặt"
        ],
        corrects: [1]
    },
    {
        cont: "Chức năng của mô hình hóa trực quan là gì? (Chọn hai)",
        answers: [
            "tạo ra một mô hình đơn biểu diễn mọi khía cạnh của hệ thống",
            "nâng cao sự giao tiếp và khả năng hiểu được hệ thống trong các thành viên trong đội dự án phần mềm",
            "làm tài liệu về những quyết định thiết kế quan trọng trong khi viết chương trình",
            "làm tài liệu về hành vi và cấu trúc của hệ thống trước khi viết mã cho chương trình"
        ],
        corrects: [1, 3]
    },
    {
        cont: "Trong phân tích ca sử dụng, tại sao nên sử dụng các cơ chế Phân tích?",
        answers: [
            "Để giảm độ phức tạp và tăng tính nhất quán bằng cách cung cấp ký hiệu cho những hành vi phức tạp",
            "Để đơn giản hóa nhiệm vụ tạo ra các use-case, cung cấp ký hiệu viết tắt cho các nhiệm vụ lặp đi lặp lại",
            "Để thu thập các nhiệm vụ chung vào một nơi, dễ dàng cho nhà phát triển thưc hiện",
            "Để chứng minh rằng các nhà thiết kế đã thực hiện chính xác như thiết kế của các kiến trúc sư"
        ],
        corrects: [0]
    },
    {
        cont: "Phát biểu nào là chính xác về các pattern?",
        answers: [
            "Pattern chỉ xuất hiện ở trong mức Thiết kế",
            "Pattern cung cấp một giải pháp chung cho những vấn đề chung",
            "Pattern chỉ xuất hiện ở trong mức Kiến trúc",
            "Pattern chỉ được sử dụng trong Giai đoạn xây dựng (Elaboration Phase)"
        ],
        corrects: [1]
    },
    {
        cont: "Trong khâu Phân tích ca sử dụng, tại sao thường phải bổ sung các mô tả ca sử dụng?",
        answers: [
            "Mô tả ca sử dụng không phải luôn chứa đủ thông tin để xác định lớp và đối tượng phân tích",
            "Luồng sự kiện ca sử dụng thường quá phức tạp để thực hiện được",
            "Người thiết kế cần biết luồng ca sử dụng nào đang được phân tích cho lần lặp hiện thời",
            "Kiến trúc sư cần phải điều chỉnh các lỗi trước khi chuyển bản đặc tả ca sử dụng cho bên thiết kế"
        ],
        corrects: [0]
    },
    {
        cont: "Trong phân tích ca sử dụng, mục đích của bước hợp nhất (unify) các lớp phân tích là gì?",
        answers: [
            "để chắc chắn rằng mỗi lớp phân tích là đại diện cho một khái niệm rạch ròi và không bị trùng khớp trách nhiệm",
            "để tập hợp các lớp phân tích từ hiệ thực hóa ca sử dụng và đưa chúng vào mô hình thiết kế",
            "để đảm bảo trách nhiệm của các mỗi là thống nhất và những lớp đó có mục đích rõ ràng",
            "để tạo họ các lớp khởi tạo ban đầu bằng việc áp dụng thừa kế để nhóm các lớp liên quan theo những cấu trúc cây"
        ],
        corrects: [0]
    },
    {
        cont: "Tiến trình nào sau đây là phù hợp nhất cho UML? (Chọn ba)",
        answers: [
            "use-case driven",
            "waterfall development-based",
            "interative and incremental",
            "architecture-centric",
            "requirements-centric"
        ],
        corrects: [0, 2, 3]
    },
]