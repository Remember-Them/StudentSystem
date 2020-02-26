$(function () {
    //左侧班级索引
    var classIndex = 0;
    //右侧学生所在行
    var trIndex = 0;
    //所有的学生信息
    var studentArr = [students_json_01.data, students_json_02.data]

    userName();
    className();
    studentInfo();

    //显示用户
    function userName() {
        var uname = get_value_from_storage('USERID');
        $('.uname').html(uname);
    }

    //显示当前所有班级
    function className() {
        var classname = class_json.data;
        var liContent = '';
        for (var i = 0; i < classname.length; i++) {
            liContent += '<li data-index= ' + i + '>' + classname[i].classname + '</li>';
        }
        $('.class-list').html(liContent);
        $('.class-list li').eq(0).addClass('active')
    }
    //点击班级列表 切换学生信息
    $('.class-list').delegate('li', 'click', function () {
        $('.class-list li').removeClass('active');
        $(this).addClass('active');
        classIndex = $(this).attr('data-index');
        $('.right-class').html($(this).html());
        studentInfo();
    })
    //另一种实现方式

    // $(document).on('click', '.class-list li', function () {
    //     $(this).siblings().removeClass('active');
    //     $(this).addClass('active');
    //     classIndex = $(this).attr('data-index');
    //     // $('.right-class').html($(this).html());
    //     studentInfo();
    // })

    //显示学生信息
    function studentInfo() {
        var studentContent = '';
        for (var i = 0; i < studentArr[classIndex].length; i++) {
            studentContent +=
                "<tr data-index=" + i + ">" +
                "<td><input type='checkbox' class='stu-check'></td>" +
                "<td>" + studentArr[classIndex][i].truename + "</td>" +
                "<td>" + studentArr[classIndex][i].sno + "</td>" +
                "<td>" + studentArr[classIndex][i].tel + "</td>" +
                "<td>" + studentArr[classIndex][i].gender + "</td>" +
                "<td>" + studentArr[classIndex][i].age + "</td>" +
                "<td>" + studentArr[classIndex][i].major + "</td>" +
                "<td>" +
                "<button class='btn btn-edit btn-info btn-index'  data-toggle='modal' data-target='#editModal'>编辑</button>" +
                "<button class='btn btn-del btn-danger btn-index' data-toggle='modal' data-target='#delModal'>删除</button>" +
                "</td>" +
                "</tr>"
        }
        $('.student-info').html(studentContent);
    }
    $(document).on('click', '.btn-edit', function () {
        // $(this).parents('tr').find('input').prop('checked', 'true');
        // console.log($(this).parents('tr').attr('data-index'))
        $('.stu-title').html('编辑');
    })
    $('.student-info').delegate('.btn-index', 'click', function () {
        trIndex = $(this).parents('tr').attr('data-index');
        console.log(studentArr[classIndex][trIndex])
    })

    $('.del-sure').click(function () {
        studentArr[classIndex].splice(trIndex * 1, 1);
        studentInfo();
        $('#delModal').modal('hide');
    })


    $('.all').change(function () {
        var allchecked = $(this).prop('checked');
        // if (allchecked) {
        //     $('.stu-check').prop('checked', true);
        // } else {
        //     $('.stu-check').prop('checked', false);
        // }
        $('.stu-check').prop('checked',allchecked)
    })

    $('.stu-check').on('change',function () {
        var every = $('.stu-check').length;
        var everychecked = $('.stu-check:checked').length;
        // if (every == everychecked) {
        //     $('.all').prop('checked', true);
        // } else {
        //     $('.all').prop('checked', false);
        // }
        $('.all').prop('checked',every==everychecked)
    })


})