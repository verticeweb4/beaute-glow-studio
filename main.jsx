import React, {useState} from "react";
import {createRoot} from "react-dom/client";
import {Menu, X, MapPin, Heart, Gem, Star, Instagram, ArrowUpRight, MessageCircle} from "lucide-react";
import "./styles.css";

const wa = "https://wa.me/554796383630";
const maps = "https://www.google.com/maps/search/?api=1&query=G+beauté,+Av.+Brasil,+741,+Balneário+Camboriú+-+SC";
const insta = "https://www.instagram.com/";

function App(){
  const [open,setOpen] = useState(false);
  const services = [
    ["Produção para eventos","Cabelo e make para as datas que pedem algo especial.","/images/makeup.jpg"],
    ["Mega Hair","Comprimento e volume com naturalidade.","/images/salon.jpg"],
    ["Mechas","Luz e dimensão na medida certa para você.","/images/redhead.jpg"],
    ["Tratamentos de beleza","Cuidados que devolvem brilho e vitalidade.","/images/hair.jpg"],
  ];
  return <div className="site">
    <header className="nav">
      <a className="logo" href="#top">G <i>beauté</i></a>
      <div className="navActions">
        <a className="agenda" href={wa} target="_blank" rel="noreferrer"><MessageCircle size={15}/> AGENDAR AGORA</a>
        <button className="menuBtn" onClick={()=>setOpen(!open)} aria-label="Menu">{open?<X/>:<Menu/>}</button>
      </div>
      {open && <div className="mobileMenu">
        <a href="#servicos" onClick={()=>setOpen(false)}>Serviços</a>
        <a href="#avaliacoes" onClick={()=>setOpen(false)}>Avaliações</a>
        <a href="#localizacao" onClick={()=>setOpen(false)}>Localização</a>
        <a href={wa} target="_blank" rel="noreferrer">Agendar pelo WhatsApp</a>
      </div>}
    </header>

    <main id="top">
      <section className="trustbar">
        <div><Star/><strong>4,6</strong><span>172 avaliações no Google</span></div>
        <div><Gem/><strong>Profissionais</strong><span>especializados</span></div>
        <div><Heart/><strong>Atendimento</strong><span>personalizado</span></div>
        <div><MapPin/><strong>Localização central</strong><span>em Balneário Camboriú</span></div>
      </section>

      <section className="hero">
        <img src="/images/hero.jpg" alt="Produção de beleza"/>
        <div className="heroShade"/>
        <div className="heroText">
          <p className="eyebrow">PELE · CABELO · MAKE · NOIVAS</p>
          <h1>Realce o que <em>te<br/>faz única.</em></h1>
          <p className="lead">Beleza, cuidado e produção para momentos que merecem ser lembrados.</p>
          <div className="heroBtns">
            <a className="goldBtn" href={wa} target="_blank" rel="noreferrer"><MessageCircle size={16}/> AGENDAR PELO WHATSAPP</a>
            <a className="outlineBtn" href="#servicos">CONHECER SERVIÇOS</a>
          </div>
          <div className="heroMeta"><span>4,6★ no Google</span><span>172 avaliações</span><span>Balneário Camboriú</span></div>
        </div>
      </section>

      <section className="intro">
        <div className="eyebrow">SERVIÇOS</div>
        <div className="introGrid"><h2>Beleza em <em>cada<br/>detalhe.</em></h2><p>Uma experiência completa para cuidar de você, do dia a dia aos momentos mais especiais.</p></div>
      </section>

      <section className="feature" id="servicos">
        <div className="featureMain"><img src="/images/bride.jpg"/><p>Beleza para momentos especiais</p></div>
        <div className="featureSmall"><img src="/images/hair.jpg"/><p>Penteado & acessórios</p></div>
        <div className="featureSide"><img src="/images/makeup.jpg"/><p>Make & pele iluminada</p><ul><li>CABELO DE NOIVA</li><li>MAQUIAGEM</li><li>PENTEADOS</li><li>DETALHES DE PRODUÇÃO</li></ul></div>
      </section>

      <section className="brideIntro">
        <div className="eyebrow">NOIVAS G BEAUTÉ</div>
        <h2>O seu grande dia<br/>começa <em>nos detalhes.</em></h2>
        <p>Uma produção pensada para você viver cada momento do seu casamento com segurança, beleza e tranquilidade.</p>
      </section>

      <section className="cards">
        {services.map((s,i)=><article key={i} className="serviceCard"><img src={s[2]}/><div className="cardOverlay"/><div className="cardText"><small>0{i+6}</small><h3>{s[0]}</h3><p>{s[1]}</p><a href="#localizacao">CONHECER ↗</a></div></article>)}
      </section>

      <section className="location" id="localizacao">
        <div className="mapPlaceholder">
          <iframe title="Localização G beauté" src="https://www.google.com/maps?q=G%20beauté%20Av.%20Brasil%20741%20Balneário%20Camboriú%20SC&output=embed" loading="lazy"/>
        </div>
        <div className="address">
          <div className="eyebrow">ENDEREÇO</div>
          <h3>Av. Brasil, 741 - Centro<br/>Balneário Camboriú - SC<br/>88330-786</h3>
          <p><i>Localizado em La Maison FG</i></p>
          <hr/>
          <div className="contact"><div><small>TELEFONE</small><span>(47) 3228-5186</span></div><div><small>WHATSAPP</small><span>+55 47 9638-3630</span></div></div>
          <a className="darkBtn" href={wa} target="_blank" rel="noreferrer"><MessageCircle size={17}/> FALAR NO WHATSAPP</a>
          <a className="lightBtn" href={maps} target="_blank" rel="noreferrer">COMO CHEGAR</a>
        </div>
      </section>

      <section className="reviews" id="avaliacoes">
        <div className="reviewLeft"><div className="eyebrow">AVALIAÇÕES</div><h2>O que nossas<br/>clientes <em>dizem.</em></h2><div className="score">4,6 <span>★★★★★<small>172 avaliações no<br/>Google</small></span></div><a className="outlineBtn" href="https://www.google.com/search?q=G+beauté+Balneário+Camboriú" target="_blank" rel="noreferrer">VER AVALIAÇÕES NO GOOGLE</a></div>
        <div className="quote"><span>“</span><img src="/images/portrait.jpg"/><div><h3>Todos são solícitos e os prestadores de serviços são excelentes.</h3><small>CLIENTE · GOOGLE</small></div></div>
      </section>

      <section className="gallery">
        <div><img src="/images/portrait.jpg"/><img src="/images/eye.jpg"/></div>
        <img src="/images/makeup.jpg"/>
        <img src="/images/redhead.jpg"/>
        <img src="/images/nails.jpg"/>
        <img src="/images/salon.jpg"/>
        <img src="/images/hair.jpg"/>
        <a className="outlineBtn" href={insta} target="_blank" rel="noreferrer"><Instagram size={15}/> VER MAIS NO INSTAGRAM</a>
      </section>
    </main>

    <a className="floatWa" href={wa} target="_blank" rel="noreferrer" aria-label="WhatsApp"><MessageCircle/></a>
    <footer>G beauté · Balneário Camboriú · Beleza em cada detalhe.</footer>
  </div>
}
createRoot(document.getElementById("root")).render(<App/>);
