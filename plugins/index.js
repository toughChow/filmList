
    $(function() {
        // 设置行级元素背景颜色
        $("tr:odd").css({ "background-color": "#F9F9F9" });

        // 全选 全不选操作
        $('#opt').on("click", function() {
            var count = 0; // 计数选中行数目
            $('.checkBox').each(function() {
                if ($(this).prop("checked") == true) {
                    count = count + 1; // 若选中 则加1
                }
            });
            var count2 = $('.checkBox').length; // 得到所有行数目	
            if (count != count2) {
                $('.checkBox').prop("checked", true);
            } else {
                $('.checkBox').prop("checked", false);
            }
        });

        // 单行选中
        $("tr").last().prevAll().children().find("input").parent().siblings().on("click", function() { // td
            $judge = $(this).parent().children().first().children().prop("checked");
            if ($judge) {
                $(this).parent().children().first().children().prop("checked", false);
            } else {
                $(this).parent().children().first().children().prop("checked", true);
            }
        });

        // 全局变量 存储删除数据
        $deleteData = null;

        // 删除选中行
        $('.btn2').on("click", function() {
            $count = 0;
            $("tr").each(function() {
                $judge = $(this).children().first().children().prop("checked");
                if ($judge) { // 判断是否存在选中行
                    $count++;
                }
            });
            if ($count == 0) {
                alert("请选择待删除项!");
            } else {
                $flag = window.confirm("确定删除选中项?");
                if (!$flag) {
                    return false;
                } else { // 确认删除 ，执行删除操作
                    $("tr").each(function() {
                        $judge = $(this).children().first().children().prop("checked");
                        if ($judge) {
                            $(this).hide();
                            $(this).children().first().children().prop("checked", false);
                            // $deleteData = $(this).detach();
                        }
                    });
                }
            }


        });

        // 恢复选中行
        $('.btn1').on("click", function() {
            $('tr').show();
            // $("tr").last().prev().append($deleteData);
        });
    });