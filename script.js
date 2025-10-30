// 简单的MD5实现（用于生成安全哈希）
function md5(str) {
    // 简化的MD5实现，仅用于演示
    // 实际项目中应使用更完整的MD5库
    let hash = '';
    for (let i = 0; i < str.length; i++) {
        hash += (str.charCodeAt(i) & 0xff).toString(16);
    }
    
    // 截断到32字符
    return hash.substring(0, 32).padEnd(32, '0');
}

// CPX RESEARCH 初始化
function initCPXResearch() {
    const wrapper = document.getElementById('cpx-iframe-wrapper');
    
    // 清除现有iframe以确保每次都是新的会话
    while (wrapper.firstChild) {
        wrapper.removeChild(wrapper.firstChild);
    }
    
    // CPX RESEARCH 配置信息
    const appId = '9860';
    const appSecureHash = 'OcLDaBSwsPmgdS6AWqGv3zwo8eOjtk3P'; // 从示例中获取
    
    // 生成全新的随机用户ID，确保每次登录都是新的标识
    const uniqueUserId = 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    
    // 生成安全哈希
    const secureHash = md5(uniqueUserId + '-' + appSecureHash);
    
    // 生成随机用户名和邮箱，同样每次都是新的
    const username = 'session_user' + Date.now() + Math.floor(Math.random() * 1000);
    const email = username + '@example.com';
    
    // 创建iframe URL
    const iframeUrl = `https://offers.cpx-research.com/index.php?app_id=${appId}&ext_user_id=${encodeURIComponent(uniqueUserId)}&secure_hash=${secureHash}&username=${encodeURIComponent(username)}&email=${encodeURIComponent(email)}`;
        
        // 创建iframe
        const iframe = document.createElement('iframe');
        iframe.src = iframeUrl;
        iframe.width = '100%';
        iframe.height = '2000px';
        iframe.frameBorder = '0';
        iframe.scrolling = 'yes';
        iframe.name = 'CPXResearch';
        
        // 添加到容器
        wrapper.appendChild(iframe);
}

// RapidoReach 初始化
function initRapidoReach() {
    const wrapper = document.getElementById('rapidoreach-iframe-wrapper');
    
    // 清除现有iframe以确保每次都是新的会话
    while (wrapper.firstChild) {
        wrapper.removeChild(wrapper.firstChild);
    }
    
    // RapidoReach 配置信息
    const appId = 'yEtEXafvuZ_';
    const appKey = '2f1141e7db6078131ada4f6f38baa99a';
    
    // 生成全新的随机用户ID，确保每次登录都是新的标识
    const internalUserId = 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    
    // 生成校验和
    const checksum = md5(internalUserId + '-' + appId + '-' + appKey);
    
    // 创建UID
    const rapidoreachUid = internalUserId + '-' + appId + '-' + checksum;
        
        // 创建iframe
        const iframe = document.createElement('iframe');
        iframe.src = 'https://www.rapidoreach.com/ofw/?userId=' + encodeURIComponent(rapidoreachUid);
        iframe.width = '100%';
        iframe.height = '100%';
        iframe.frameBorder = '0';
        iframe.scrolling = 'yes';
        iframe.name = 'RewardsCenter';
        
        // 添加到容器
        wrapper.appendChild(iframe);
}

document.addEventListener('DOMContentLoaded', function() {
    // 检查当前页面
    const currentPage = window.location.pathname;
    const isDashboard = currentPage.includes('dashboard.html');
    
    // 移动端菜单切换
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
        });
    }
    
    // RapidoReach 弹窗逻辑
    const rapidoreachModal = document.getElementById('rapidoreachModal');
    const openRapidoreachBtn = document.getElementById('openRapidoreach');
    const closeRapidoreachBtn = document.querySelector('.close-rapidoreach');
    
    if (rapidoreachModal && openRapidoreachBtn) {
        // 打开弹窗
        openRapidoreachBtn.addEventListener('click', function() {
            rapidoreachModal.classList.add('active');
            // 打开时初始化RapidoReach
            initRapidoReach();
        });
        
        // 关闭弹窗
        if (closeRapidoreachBtn) {
            closeRapidoreachBtn.addEventListener('click', function() {
                rapidoreachModal.classList.remove('active');
            });
        }
        
        // 点击弹窗外部关闭
        rapidoreachModal.addEventListener('click', function(event) {
            if (event.target === rapidoreachModal) {
                rapidoreachModal.classList.remove('active');
            }
        });
    }
    
    // CPX RESEARCH 弹窗逻辑
    const cpxModal = document.getElementById('cpxModal');
    const openCPXBtn = document.getElementById('openCPX');
    const closeCPXBtn = document.querySelector('.close-cpx');
    
    if (cpxModal && openCPXBtn) {
        // 打开弹窗
        openCPXBtn.addEventListener('click', function() {
            cpxModal.classList.add('active');
            // 打开时初始化CPX RESEARCH
            initCPXResearch();
        });
        
        // 关闭弹窗
        if (closeCPXBtn) {
            closeCPXBtn.addEventListener('click', function() {
                cpxModal.classList.remove('active');
            });
        }
        
        // 点击弹窗外部关闭
        cpxModal.addEventListener('click', function(event) {
            if (event.target === cpxModal) {
                cpxModal.classList.remove('active');
            }
        });
    }
    
    // 登录和注册模态框相关代码
    const loginModal = document.getElementById('loginModal');
    const registerModal = document.getElementById('registerModal');
    const loginBtn = document.getElementById('loginBtn');
    const registerBtn = document.getElementById('registerBtn');
    const heroRegisterBtn = document.getElementById('heroRegisterBtn');
    const closeModalBtns = document.querySelectorAll('.close-modal');
    
    // 打开登录模态框
    if (loginBtn && loginModal) {
        loginBtn.addEventListener('click', function() {
            loginModal.style.display = 'flex';
        });
    }
    
    // 打开注册模态框
    if (registerBtn && registerModal) {
        registerBtn.addEventListener('click', function() {
            registerModal.style.display = 'flex';
        });
    }
    
    // 打开英雄区域注册按钮
    if (heroRegisterBtn && registerModal) {
        heroRegisterBtn.addEventListener('click', function() {
            registerModal.style.display = 'flex';
        });
    }
    
    // 关闭模态框
    closeModalBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            if (loginModal) loginModal.style.display = 'none';
            if (registerModal) registerModal.style.display = 'none';
        });
    });
    
    // 点击模态框外部关闭
    window.addEventListener('click', function(event) {
        if (event.target === loginModal) {
            loginModal.style.display = 'none';
        } else if (event.target === registerModal) {
            registerModal.style.display = 'none';
        }
    });
    
    // 切换到注册
    const switchToRegister = document.getElementById('switchToRegister');
    if (switchToRegister && loginModal && registerModal) {
        switchToRegister.addEventListener('click', function() {
            loginModal.style.display = 'none';
            registerModal.style.display = 'flex';
        });
    }
    
    // 切换到登录
    const switchToLogin = document.getElementById('switchToLogin');
    if (switchToLogin && loginModal && registerModal) {
        switchToLogin.addEventListener('click', function() {
            registerModal.style.display = 'none';
            loginModal.style.display = 'flex';
        });
    }
    
    // 登录表单提交
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            // 获取表单字段
            const email = document.getElementById('loginEmail');
            const password = document.getElementById('loginPassword');
            
            // 检查字段是否存在
            if (email && password) {
                // 这里应该有更复杂的验证逻辑
                if (email.value && password.value) {
                    // 登录成功，跳转到仪表盘
                    window.location.href = 'dashboard.html';
                } else {
                    alert('请输入邮箱和密码');
                }
            }
        });
    }
    
    // 注册表单提交
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            // 获取表单字段
            const name = document.getElementById('registerName');
            const email = document.getElementById('registerEmail');
            const password = document.getElementById('registerPassword');
            const confirmPassword = document.getElementById('registerConfirmPassword');
            
            // 检查字段是否存在
            if (name && email && password && confirmPassword) {
                // 检查是否已填写所有字段且密码匹配
                if (name.value && email.value && password.value && confirmPassword.value && password.value === confirmPassword.value) {
                    // 注册成功，跳转到仪表盘
                    window.location.href = 'dashboard.html';
                } else if (password.value !== confirmPassword.value) {
                    alert('两次输入的密码不一致');
                } else {
                    alert('请填写完整的注册信息');
                }
            }
        });
    }
});