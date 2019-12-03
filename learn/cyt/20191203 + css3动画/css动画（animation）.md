# css动画（animation）

## @keyframs

### @keyframs 动画名称{时长百分比{样式}}

## animation

### animation:动画名称 animation-duration(s) animation-timing-function() animation-delay animation-iteration-count animation-direction

## animation-name

### @keyframes动画规定的名称

## animation-timing-function

### linear:动画从头到尾速度是相同的

### ease：默认，动画从低速开始，然后加快，结束时变慢

#### ease-in:动画从低速开始

#### ease-out:动画低速结束

#### ease-in-out:动画低速开始和结束

### cublic-bezier(n,n,n,n):n的值为【0.1】

## animation-delay

### animation-delay:time  动画延迟播放的时间

## animation-iteration-count

### 动画播放的次数 animation-iteration-count:n

### animation-iteration:infinite动画无限次播放

## animation-direction

### normal:动画应该正常播放

### alternate 动画轮流反向播放

## animation-play-state

### paused 规定动画已经暂停

### runing 规定动画正在播放

## animation-fill-mode

### none 不改变默认行为

### forwards 当动画完成后，保持最后一个属性值 (在最后一个关键帧中定义)

### 在animation-delay所制定的一段时间内，在动画显示之前，应用开始属性值（在第一个关键帧中定义）

### both 向前和向后填充模式都被应用

## animation-duration

### 动画一个周期的时间
