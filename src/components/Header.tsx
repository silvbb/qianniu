import './Header.css'

function Header() {
  return (
    <header className="header">
      <p className="header-title">二师兄</p>
      <div className="header-subtitle-container">
        <p className="header-subtitle">AI 软件工程师 & 实时更新最新 AI 资讯</p>
        <img src="/Peacock.png" alt="Peacock" width="25" height="25" />

      </div>
      <p className="header-description">✦ 我为企业构建可扩展、高性能、高成本效益的人工智能产品，助力企业实现智能化转型和升级。我们的产品可将模型部署成本降低 50%，推理速度提升 10 倍，并提供完善的安全和可靠性保障。我们致力于为中小企业提供易用实惠的人工智能解决方案，也为大型企业提供定制化的人工智能平台。</p>

    </header>
  )
}

export default Header