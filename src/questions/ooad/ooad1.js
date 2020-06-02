export const questions1 = [{
    cont: "Phát biểu nào sau đây là chính xác?",
    answers: [
        "UML là quy trình phát triển các hệ thống phần mềm",
        "UML là ngôn ngữ phụ thuộc vào quy trình phát triển và được sử dụng để biểu diễn trực quan các chế tác phần mềm",
        "UML là ngôn ngữ mô hình hóa cho các bản thiết kế phần mềm",
        "UML là ngôn ngữ lập trình trực quan"
    ],
    corrects: [2]
    },
    {
        cont: "Đâu là 3 điểm khác biệt giữa lớp cấu trúc và lớp truyền thống (Chọn 3)",
        answers: [
            "Nó định nghĩa rõ ràng một lớp biên thông qua một vỏ bao đóng (encapsulation shell)",
            "Nó đưa ra các public interfaces cho lớp thông qua các cổng",
            "Nó cho thấy vai trò của lớp",
            "Nó định nghĩa các message giữa chính nó và các lớp khác"
        ],
        corrects: [0, 1, 2]
    },
    {
        cont: "Đâu là đặc điểm của lớp cấu trúc?",
        answers: [
            "Phải có một giao diện cho mỗi vai trò",
            "Chỉ có thể đóng một vai trò, bất kể có bao nhiêu đối tượng giao dịch với nó",
            "Có thể đóng nhiều vai trò khác nhau dựa trên các đối tượng tương tác với nó",
            "Bị giới hạn ở một vai trò, nhưng có thể có nhiều giao diện"
        ],
        corrects: [2]
    },
    {
        cont: "Phát biểu nào là đúng về một quá trình phát triển lặp",
        answers: [
            "Test và tích hợp trong mỗi lần lặp",
            "Mỗi lần lặp lại tập trung vào một phần của hiện thực hóa use-case được lựa chọn",
            "Nó khuyến khích phản hồi người dùng trong các lần lặp sau",
            "Nó dựa trên chức năng phân hủy của một hệ thống"
        ],
        corrects: [0]
    },
    {
        cont: "Hai câu nào đúng về giao diện?",
        answers: [
            "Giao diện nên có mục đích rõ ràng",
            "Một giao diện duy nhất nên bao gồm càng nhiều phương thức có thể, nếu không phải tất cả các phương thức, có thể được chia sẻ",
            "Một giao diện nên được sử dụng để hạn chế phương thức nào được tiếp xúc với máy khách",
            "Các lớp có thể có nhiều giao diện tùy thuộc vào mục đích của từng giao diện mà nó thực hiện"
        ],
        corrects: [0, 3]
    },
    {
        cont: "Trọng tâm của phân tích là gì?",
        answers: [
            "Chuyển các yêu cầu chức năng thành code",
            "Chuyển các yêu cầu thành một thiết kế hệ thống",
            "Chuyển các khái niệm trong thế giới thực sang các solution-oriented objects",
            "Chuyển các yêu cầu chức năng thành các khái niệm phần mềm"
        ],
        corrects: [3]
    },
    {
        cont: "Tại sao đóng gói lại quan trọng? (Chọn hai)",
        answers: [
            "Nó mô tả mối quan hệ giữa hai lớp con",
            "Nó đặt các hoạt động và thuộc tính trong cùng một đối tượng",
            "Nó cho phép các đối tượng khác thay đổi các private operations và attributes của một đối tượng",
            "Nó ngăn các đối tượng khác thay đổi trực tiếp các thuộc tính của một đối tượng"
        ],
        corrects: [1, 3]
    },
    {
        cont: "Các lớp phân tích là gì?",
        answers: [
            "Các dự đoán ban đầu về cấu trúc của hệ thống, chúng thường thay đổi theo thời gian và hiếm khi tồn tại nguyên vẹn cho đến khi được cài đặt",
            "Các lớp không hoàn thiện mà lập trình viên cần xác lập tên của các thao tác và kiểu của các thuộc tính trước khi chúng có thể cài đặt được",
            "Các lớp bên trong một hệ thống đối tượng nghiệp vụ (Business object) hoặc mô hình miền (Domain Model) sử dụng UML",
            "Một nguyên mẫu (prototype) của giao diện người dùng của một hệ thống, được phát triển trong Pha phân tích, cho phép người dùng xác định giao diện và tương tác với hệ thống"
        ],
        corrects: [0]
    },
    {
        cont: "Một kiến trúc sư có trách nhiệm tạo ra một mô hình phân tích cho một hệ thống. Để tạo ra mô hình này cần tập trung vào phần nào?",
        answers: [
            "Phần cứng nơi mà hệ thống được triển khai",
            "Hành vi của các đối tượng bao gồm hệ thống",
            "Sự phát triển của hệ thống phân tích vào hệ thống thiết kế",
            "Yêu cầu về hiệu năng của hệ thống"
        ],
        corrects: [1]
    },
    {
        cont: "Một required interface làm gì?",
        answers: [
            "Trưng bày dịch vụ cho người yêu cầu ẩn danh",
            "Sử dụng các dịch vụ mà trình phân loại yêu cầu để yêu cầu từ các nhà cung cấp ẩn danh",
            "Tuyên bố các dịch vụ mà trình phân loại cung cấp để cung cấp cho người yêu cầu ẩn danh",
            "Trưng bày ra các phương thức mà người yêu cầu phải sử dụng"
        ],
        corrects: [1]
    },
    {
        cont: "Trong sơ đồ trình tự, mỗi tương tác trên sơ đồ ánh xạ tới",
        answers: [
            "một điểm lựa chọn trên sơ đồ trạng thái",
            "quá trình chuyển đổi trên sơ đồ trạng thái",
            "một trạng thái trên sơ đồ",
            "trạng thái ban đầu"
        ],
        corrects: [1]
    },
    {
        cont: "Hai câu hỏi nào cần phải trả lời khi muốn sử dụng mối quan hệ nhiều-nhiều (Chọn hai)?",
        answers: [
            "Đó là mối quan hệ ràng buộc hay tùy chọn?",
            "Có bao nhiêu liên kết một đối tượng của một loại duy trì với các đối tượng của loại khác?",
            "Một đối tượng của một loại nhất định được phép tương tác với các đối tượng của loại khác?",
            "Mối quan hệ giữa các đối tượng là vĩnh viễn hay tạm thời?"
        ],
        corrects: [0, 1]
    },
    {
        cont: "Hai cân nhắc quan trọng khi vẽ sơ đồ trạng thái là gì?",
        answers: [
            "Bất cứ khi nào một tin nhắn được nhận; có thể có một sự thay đổi của trạng thái",
            "Bất cứ khi nào một tin nhắn được nhận; phải có một sự thay đổi của trạng thái",
            "Bất cứ khi nào có sự thay đổi trạng thái, sẽ có một transition",
            "Thay đổi trạng thái có thể không thay đổi transition"
        ],
        corrects: [0, 2]
    },
    {
        cont: "Phát biểu nào là đúng về phụ thuộc vòng tròn?",
        answers: [
            "Nó không quan trọng",
            "Nó bị cấm",
            "Nó phải được tránh",
            "Khi có nhiều hơn hai gói (package), chúng không liên quan"
        ],
        corrects: [2]
    },
    {
        cont: "Mục đích của phân tích kiến ​​trúc là gì ?",
        answers: [
            "để chi tiết thiết kế của hệ thống",
            "để xem xét kiến ​​trúc của hệ thống",
            "để xác định kiến ​​trúc ứng cử viên cho hệ thống",
            "để xác định các tầng (layers) của kiến ​​trúc"
        ],
        corrects: [2]
    },
    {
        cont: "Phát biểu nào là đúng về thuộc tính?",
        answers: [
            "Chúng không thể thay đổi một khi đối tượng được khởi tạo",
            "Chúng thay đổi giá trị từ đối tượng sang đối tượng của cùng một lớp",
            "Chúng chỉ có thể là giá trị nguyên thủy",
            "Chúng được yêu cầu cho mọi lớp"
        ],
        corrects: [1]
    },
    {
        cont: "Phân tích thiết kế hướng đến ba mục đích nào? (Chọn ba)",
        answers: [
            "Cung cấp một khung cảnh tổ chức cho hệ thống",
            "Chuyển các yêu cầu sang bản thiết kế hệ thống",
            "Tiến hóa và hình thành cấu trúc vững chắc cho hệ thống",
            "Xác định phạm vi của hệ thống và mô tả những gì hệ thống phải làm",
            "Thích ứng bản thiết kế với môi trường cài đặt"
        ],
        corrects: [1, 3, 4]
    },
    {
        cont: "Các đối tượng đa hình _____",
        answers: [
            "phải có cùng thuộc tính",
            "chia sẻ tất cả các operation giống nhau và các operation thực hiện như nhau",
            "chỉ có thể được implement thông qua các giao diện",
            "có thể có cùng tên operation nhưng các operation thực hiện khác nhau"
        ],
        corrects: [3]
    },
    {
        cont: "Trong khâu Phân tích kiến trúc, kiến trúc sư phần mềm phải dựa vào đâu để giảm độ phức tạp của hệ thống và tăng tính nhất quán?",
        answers: [
            "Các quy tắc viết mã",
            "Các hiện thực hóa ca sử dụng",
            "Các cơ chế phân tích",
            "Các cơ chế thiết kế"
        ],
        corrects: [2]
    },
    {
        cont: "Hai đặc điểm nào mà tất cả các đối tượng có? (Chọn hai)",
        answers: [
            "Nguyên thủy",
            "Trạng thái và hành vi",
            "Giao diện (interface)",
            "Một định danh riêng"
        ],
        corrects: [1, 3]
    },
];