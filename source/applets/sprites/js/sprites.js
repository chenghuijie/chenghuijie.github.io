var image_list = document.getElementById('image_list'),
  settings = document.getElementById('settings'),
  submit_btn = document.getElementById('submit_btn'),
  dropbox = document.getElementById('dropbox'),
  workplace = document.getElementById('workplace'),
  workplace_width = 0,
  workplace_height = 0,
  background_size = document.getElementById('background_size'),
  css_code = document.getElementById('css_code'),
  sprites_img = document.getElementById('sprites_img'),
  result_pop = document.getElementById('result_pop'),
  workplace_ctx = workplace.getContext('2d'),
  sprites = []

document.addEventListener('DOMContentLoaded', function () {

  document.addEventListener('dragenter', function () {
    dropbox.classList.add('dragFile')
  }, false)

  document.addEventListener('dragleave', function () {
    dropbox.classList.remove('dragFile')
  }, false)

  dropbox.addEventListener('dragenter', function () {
    dropbox.classList.add('dragenter')
  }, false)

  dropbox.addEventListener('dragleave', function () {
    dropbox.classList.remove('dragenter')
  }, false)

  dropbox.addEventListener('dragenter', function (e) {
    e.stopPropagation()
    e.preventDefault()
  }, false)

  dropbox.addEventListener('dragover', function (e) {
    e.stopPropagation()
    e.preventDefault()
  }, false)

  dropbox.addEventListener('drop', function (e) {
    e.stopPropagation()
    e.preventDefault()
    console.log(e)
    //dropbox.style.display = "none";
    settings.style.display = 'block'

    handleFiles(e.dataTransfer.files, function (li) {
      image_list.appendChild(li)
    })
  }, false)

  submit_btn.addEventListener('click', function () {
    var type = document.getElementById('type').value,
      padding = parseInt(document.getElementById('padding').value),
      filename = document.getElementById('filename').value

    console.log(sprites)
    drawSprites(type, padding)
    css_code.value = generateCss(type, filename)

    var data = workplace.toDataURL()

    sprites_img.querySelector('img').src = data
    result_pop.style.display = 'block'
    settings.style.display = 'none'
    dropbox.style.display = 'none'
    var evt = document.createEvent('HTMLEvents')
    evt.initEvent('click', false, false)
    sprites_img.download = filename
    sprites_img.href = data
    sprites_img.dispatchEvent(evt)
  }, false)
})

function handleFiles (files, callback) {
  for (var i = 0; i < files.length; i++) {
    var file = files[i]
    if (!file.type.match(/image*/)) {
      continue
    }

    var reader = new FileReader()
    reader.onload = (function (file) {
      return function (e) {
        console.log(file)
        FileReaderOnload(e, file, callback)
      }
    }(file))

    reader.readAsDataURL(file)
  }
}

function FileReaderOnload (e, file, callback) {
  var img_container = document.createElement('div'),
    img = document.createElement('img'),
    li = document.createElement('li'),
    meta = document.createElement('dl'),
    metas = [],
    dt, dd

  img.src = e.target.result
  //img.file = file;

  //console.log(e,file);
  metas.push({
    'text': '文件名称：',
    'value': file.name
  })

  metas.push({
    'text': '文件大小：',
    'value': img.width + 'px X ' + img.height + 'px'
  })

  metas.push({
    'text': '文件尺寸：',
    'value': formateFileSize(e.total)
  })

  metas.push({
    'text': '文件类型：',
    'value': getFileType(file.type)
  })

  metas.push({
    'text': '上次修改时间：',
    'value': formatDate(file.lastModifiedDate, 'yyyy-MM-dd hh:mm:ss')
  })

  metas.forEach(function (v) {
    dt = document.createElement('dt')
    dd = document.createElement('dd')

    dt.innerHTML = v.text
    dd.innerHTML = v.value
    meta.appendChild(dt)
    meta.appendChild(dd)
  })

  img_container.classList.add('img_container')
  img_container.appendChild(img)

  li.appendChild(img_container)
  li.appendChild(img_container.cloneNode(true))
  //li.appendChild(meta);
  callback(li, e, file)

  sprites.push({ img: img, file: file })
}

function getFileName (allname) {
  allname = allname.split('.')
  allname.pop()
  allname.join('.')
  return allname
}

function drawSprites (type, padding) {
  var i
  workplace_width = 0
  workplace_height = 0

  if (type == 'v_l') {
    for (i = 0; i < sprites.length; i++) {
      if (workplace_width < sprites[i].img.width) {
        workplace_width = sprites[i].img.width
      }
    }

    for (i = 0; i < sprites.length; i++) {
      sprites[i].x = 0
      if (i == 0) {
        sprites[i].y = workplace_height
        workplace_height += sprites[i].img.height
      } else {
        sprites[i].y = workplace_height + padding
        workplace_height += sprites[i].img.height + padding
      }
    }
  } else if (type == 'v_r') {
    for (i = 0; i < sprites.length; i++) {
      if (workplace_width < sprites[i].img.width) {
        workplace_width = sprites[i].img.width
      }
    }

    for (i = 0; i < sprites.length; i++) {
      sprites[i].x = workplace_width - sprites[i].img.width

      if (i == 0) {
        sprites[i].y = workplace_height
        workplace_height += sprites[i].img.height
      } else {
        sprites[i].y = workplace_height + padding
        workplace_height += sprites[i].img.height + padding
      }

    }
  } else if (type == 'h_t') {
    for (i = 0; i < sprites.length; i++) {
      if (workplace_height < sprites[i].img.height) {
        workplace_height = sprites[i].img.height
      }
    }

    for (i = 0; i < sprites.length; i++) {
      sprites[i].y = 0
      if (i == 0) {
        sprites[i].x = workplace_width
        workplace_width += sprites[i].img.width
      } else {
        sprites[i].x = workplace_width + padding
        workplace_width += sprites[i].img.width + padding
      }

    }
  } else if (type == 'h_b') {
    for (i = 0; i < sprites.length; i++) {
      if (workplace_height < sprites[i].img.height) {
        workplace_height = sprites[i].img.height
      }
    }

    for (i = 0; i < sprites.length; i++) {
      sprites[i].y = workplace_height - sprites[i].img.height
      if (i == 0) {
        sprites[i].x = workplace_width
        workplace_width += sprites[i].img.width
      } else {
        sprites[i].x = workplace_width + padding
        workplace_width += sprites[i].img.width + padding
      }

    }
  }

  workplace.width = workplace_width
  workplace.height = workplace_height

  for (i = 0; i < sprites.length; i++) {
    workplace_ctx.drawImage(sprites[i].img, sprites[i].x, sprites[i].y, sprites[i].img.width, sprites[i].img.height)
  }

}

function generateCss (type, filename) {
  var cssText = '',
    //            commonCssText,
    background_size_num = background_size.checked ? 2 : 1,
    class_names = [],
    class_name, i

  console.log(background_size.checked, background_size_num)

  if (type == 'v_l') {
    for (i = 0; i < sprites.length; i++) {
      class_name = '.' + getFileName(sprites[i].file.name)
      class_names.push(class_name)
      cssText += class_name + '{background-position: 0 ' + (-sprites[i].y / background_size_num) + 'px; width: ' + (sprites[i].img.width / background_size_num) + 'px; height: ' + (sprites[i].img.height / background_size_num) + 'px;}\n'
    }
  } else if (type == 'v_r') {
    for (i = 0; i < sprites.length; i++) {
      class_name = '.' + getFileName(sprites[i].file.name)
      class_names.push(class_name)
      cssText += class_name + '{background-position: 100% ' + (-sprites[i].y / background_size_num) + 'px; width: ' + (sprites[i].img.width / background_size_num) + 'px; height: ' + (sprites[i].img.height / background_size_num) + 'px;}\n'
    }
  } else if (type == 'h_t') {
    for (i = 0; i < sprites.length; i++) {
      class_name = '.' + getFileName(sprites[i].file.name)
      class_names.push(class_name)
      cssText += class_name + '{background-position: ' + (-sprites[i].x / background_size_num) + 'px 0; width: ' + (sprites[i].img.width / background_size_num) + 'px; height: ' + (sprites[i].img.height / background_size_num) + 'px;}\n'
    }
  } else if (type == 'h_b') {
    for (i = 0; i < sprites.length; i++) {
      class_name = '.' + getFileName(sprites[i].file.name)
      class_names.push(class_name)
      cssText += class_name + '{background-position: ' + (-sprites[i].x / background_size_num) + 'px 100%; width: ' + (sprites[i].img.width / background_size_num) + 'px; height: ' + (sprites[i].img.height / background_size_num) + 'px;}\n'
    }
  }

  //        commonCssText = class_names.join(",");
  //        commonCssText += '{background:url(' + filename + ') no-repeat; ' + ((background_size_num != 1) ? 'background-size:' + (workplace_width / background_size_num) + 'px ' + (workplace_height / background_size_num) + 'px; ' : '') + 'display:inline-block}';

  //        cssText = commonCssText + '\n' + cssText;
  return cssText
}

function formateFileSize (size) {
  var unit = 1024,
    K, M, G

  //console.log(size);
  G = Math.floor(size / unit / unit / unit)
  size -= G * unit
  M = Math.floor(size / unit / unit)
  size -= M * unit
  K = Math.ceil(size / unit)

  var sizes = []
  G > 0 && sizes.push(G + 'G')
  M > 0 && sizes.push(M + 'M')
  K > 0 && sizes.push(K + 'K')

  //console.log(sizes,G,M,K);
  return sizes.join('')
}

var getFileType = (function () {
  var types = {
    'image/gif': 'GIF',
    'image/png': 'PNG',
    'image/jpeg': 'JPG'
  }

  return function (type) {
    return types[type]
  }
})()

function formatDate (date, fmt) {
  var o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  }

  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  for (var k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
    }
  }

  return fmt
}
