import { Todo } from './todo'
import { imgfile } from './imgfile';

export const TODOS: Todo[] = [
  {
    id: 1,
    title: '复习计算机组成原理',
    content: 'dddddd',
    date: new Date(),
    item: ['看试卷','根据试卷题目回归到课本'],
    isCheck: false,
    status: 3,
    img: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"  },
  {
    id: 2,
    title: '还2块钱给林渝迪',
    content: 'dddddd',
    date: new Date(),
    item: [],
    isCheck: false,
    status: 1,
    img: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2832325257,423839290&fm=27&gp=0.jpg"  },
  {
    id: 3,
    title: '每天背单词',
    content: 'dddddd',
    date: new Date(),
    item: [],
    isCheck: false,
    status: 2,
    img: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=936396177,1895124066&fm=27&gp=0.jpg"  },
  {
    id: 4,
    title: '冲水卡',
    content: 'dddddd',
    date: new Date(),
    item: [],
    isCheck: false,
    status: 3,
    img: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4031074656,1468387333&fm=27&gp=0.jpg"  }
]
