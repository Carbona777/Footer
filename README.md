"# Footer"
.sidebar .menu-bar{
height: 100%;
display: flex;
flex-direction: column;
justify-content: space-between;

}
.menu-bar .mode{
background: var(--primary-color-light);
}
.menu-bar .mode .moon-sun{
height: 50px;
width: 60px;
display: flex;
align-items: center;
}
.menu-bar .mode i{
position: absolute;
}
.menu-bar .mode i.sun{
opacity: 0;
}
.menu-bar .mode .toggle-switch{
display: flex;
align-items: center;
justify-content: center;
height: 100%;
min-width: 60px;
cursor: pointer;
}
.toggle-switch .switch{
height: 22px;
width: 44px;
background: var(--toggle-color);
position: relative;
border-radius: 25px;

}
.switch::before{
content: '';
position: absolute;
height: 15px;
width: 15px;
border-radius: 50%;
top: 50%;
left: 5px;
transform: translateY(-50%);
background: var(--sidebar-color);

}
