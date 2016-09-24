// 安装gulp来配置任务
var gulp=require("gulp");
//代码压缩
var uglify=require("gulp-uglify");
// 压缩css
var mincss=require("gulp-clean-css");
// 文件更名
var rename=require("gulp-rename");
// 图片压缩
var imgs=require("gulp-imagemin");
// 编译less
var yless=require("gulp-less");
// 代码检查
var check=require("gulp-jshint");
// 合并文件
var concat=require("gulp-concat");

gulp.task("yasuo",function(){//代码压缩
	gulp.src("js/aa.js")
		.pipe(uglify())
		.pipe(gulp.dest("jsd"))
})

gulp.task("mincss",function(){//css压缩并改名
	gulp.src("css/style1.css")
		.pipe(mincss())
		.pipe(rename({
			suffix:".min"
		}))
		.pipe(gulp.dest("css"))
})

gulp.task("imgmin",function(){//图片压缩
	gulp.src("img/*")
		.pipe(imgs())
		.pipe(gulp.dest("img/image"))
})

gulp.task("yless",function(){//编译less
	gulp.src("less/*")
		.pipe(yless())
		.pipe(gulp.dest("less"))
})

gulp.task("check",function(){//代码检查
	return	gulp.src("js/*")
		.pipe(check())
		.pipe(check.reporter("default"))
})

gulp.task("default",function(){//自动监听
	gulp.watch(["js/aa.js"],["yasuo"])
})

gulp.task("merge",function(){//合并文件
	gulp.src("js/aa.js")
		.pipe(concat("js/cc.js"))
		.pipe(rename({
			suffix: '.new'
		}))
		.pipe(gulp.dest("js"))
})



