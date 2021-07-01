/**
 * @desc 函数防抖--短时间内多次触发同一事件，只执行最后一次（非立即执行），或者只执行最开始的一次（立即执行），中间的不执行。
 * 【生活实例】如果有人进电梯（触发事件），那电梯将在10秒钟后出发（执行事件监听器），这时如果又有人进电梯了（在10秒内再次触发该事件），我们又得等10秒再出发（重新计时）。
 * 【应用场景】
 * 1、对于输入框连续输入进行AJAX验证时，用函数防抖能有效减少请求次数。
 * 2、判断scroll是否滑到底部。
 * 3、给按钮加函数防抖防止表单多次提交。
 * 总的来说，适合多次事件一次响应的情况
 *
 * @param func 目标函数
 * @param wait 延迟执行毫秒数   鼠标移动事件--函数节流的最值时间间隔应该设置为16ms
 * @param immediate true - 立即执行(默认)， false - 延迟执行
 */
export declare function debounce(func: any, wait: number, immediate?: boolean): () => void;
/**
 * @desc 函数节流--连续触发事件但是在n秒中只执行一次函数。即 2n 秒内执行 2 次… 。节流如字面意思，会稀释函数的执行频率。
 * 【生活实例】一种说法是当 1 秒内连续播放 24 张以上的图片时，
 * 在人眼的视觉中就会形成一个连贯的动画，
 * 所以在电影的播放（以前是，现在不知道）中基本是以每秒 24 张的速度播放的，
 * 为什么不 100 张或更多是因为 24 张就可以满足人类视觉需求的时候，100 张就会显得很浪费资源。
 * 【应用场景】
 * 1、DOM元素拖拽
 * 2、Canvas画笔功能
 * 3、游戏中的刷新率
 * 4、onmousemove, resize, onscroll等事件
 *
 * @param func 函数
 * @param wait 延迟执行毫秒数   鼠标移动事件--函数节流的最值时间间隔应该设置为16ms
 * @param immediate 默认true  true - 立即执行（时间戳版）， false - 延迟执行（定时器版）
 */
export declare function throttle(func: any, wait: number, immediate?: boolean): () => void;
