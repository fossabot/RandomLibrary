const gulp = require('gulp');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
const ts = require('gulp-typescript');
const clean = require('gulp-clean');
const tsProject = ts.createProject('tsconfig.json');

const DEST = 'build/';

gulp.task('copy', [], () => {
	return gulp.src(['package.json', 'README.md']).pipe(gulp.dest(DEST));
});

gulp.task('min', () => {
	return gulp.src(['build/**/*.js'])
	.pipe(uglify())
	.pipe(rename({ extname: '.min.js' }))
	.pipe(gulp.dest(DEST));
});

gulp.task('uglify', () => {
	return gulp.src(['build/**/*.js'])
		.pipe(uglify())
		.pipe(gulp.dest(DEST));
});

gulp.task('build', () => {
	return gulp.src([
		'src/**/*.ts',
		'src/**/*.tsx',
		'!src/**/*.spec.tsx',
	])
	.pipe(tsProject())
	.pipe(gulp.dest(DEST));
});

gulp.task('clean', () => {
	return gulp.src(DEST, { read: false }).pipe(clean());
});
