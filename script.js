$(".container").addClass("hide");
$(document).ready(function () {
    const video1 = $("#video1")[0];
    const video2 = $("#video2")[0];
    const video2Container = $("#video2Container");

    // video1が終了したら、video2をフェードインして再生
    $(video1).on("ended", function () {
        // video1の親要素を非表示
        $(video1).parent().hide();

        // video2Containerの不透明度を変更してフェードイン
        video2Container.css("opacity", 0); // 初期化
        video2Container.show(); // 表示
        video2Container.animate({ opacity: 1 }, 100, function () {
            video2.play(); // フェードイン完了後に再生
        });
        $(".container").removeClass("hide");

    });
});
