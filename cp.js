for (var i = 1; i < 100; ++i) {
  console.log(i, " : ", (i | (i - 1)) + 1, i | (i + 1), " : ", i & (i - 1));
}
