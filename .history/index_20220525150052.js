const { transform } = require('@babel/core');
const parser = require('@babel/parser')
const generator = require('@babel/generator').default
const traverse = require('@babel/traverse').default
import * as t from('@babel/types')
const fs = require('fs');

//读取需要转换的js字符串
const before = fs.readFileSync('./before.js', 'utf8');

//parser生成AST语法树
const ast = parser.parse(before, {
  sourceType: 'unambiguous'
})

//修改ast

traverse(ast, {
  CallExpression(path, state) {
    if (t.isMemberExpression(path.node, state)&&path.node.callee.object.name=='console'&&path.node.callee.property.include) {

    }
}
})

// 存在after.js删除
fs.existsSync('./after.js') && fs.unlinkSync('./after.js');
// 写入转化后的结果到after.js
fs.writeFileSync('./after.js', res.code, 'utf8');