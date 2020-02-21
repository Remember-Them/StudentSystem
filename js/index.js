$(function () {
    userName();
    className();



    function userName() {
        var uname = get_value_from_storage('USERID');
        $('.uname').html(uname);
    }


    function className() {
        var classname = ['移动2班', '软信2班', '网销2班'];
        var liContent = '';
        for (var i = 0; i < classname.length; i++) {
            liContent += '<li>' + classname[i] + '</li>';
        }
        $('.class-list').html(liContent);

    }

    $(document).on('click', '.class-list li', function () {
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
        $('.right-class').html($(this).html());
    })

    var studentArr = students_json_01.data;
    var studentContent = '';
    for (var i = 0; i < studentArr.length; i++) {
        studentContent +=
            "<tr data-index=" + i + ">" +
            "<td><input type='checkbox'></td>" +
            "<td>" + studentArr[i].truename + "</td>" +
            "<td>" + studentArr[i].sno + "</td>" +
            "<td>" + studentArr[i].tel + "</td>" +
            "<td>" + studentArr[i].gender + "</td>" +
            "<td>" + studentArr[i].age + "</td>" +
            "<td>" + studentArr[i].major + "</td>" +
            "<td>" +
            "<button class='btn btn-edit btn-info'>编辑</button>" +
            "<button class='btn btn-del btn-danger'>删除</button>" +
            "</td>" +
            "</tr>"
        $('.student-info').html(studentContent);
        $(document).on('click', '.btn-edit', function () {
            console.log($(this).parents('tr').attr('data-index'))
        })
    }
})