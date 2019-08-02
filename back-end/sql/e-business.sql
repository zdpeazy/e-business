
SET FOREIGN_KEY_CHECKS=0;

DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(40) NOT NULL DEFAULT '',
  `password` varchar(100) NOT NULL DEFAULT '',
  `phone` int(11) NOT NULL DEFAULT 0,
  `openid` char(28) NOT NULL COMMENT '微信openid',
  `nick_name` varchar(100) NOT NULL DEFAULT '' COMMENT '微信名称',
  `avatarUrl` varchar(100) NOT NULL DEFAULT '' COMMENT '微信头像',
  `user_level` tinyint(3) NOT NULL DEFAULT '0' COMMENT '用户等级',
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` datetime DEFAULT NULL COMMENT '更新时间',

  PRIMARY KEY (`id`),
  UNIQUE KEY `openid` (`openid`) USING BTREE COMMENT 'openid唯一'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


DROP TABLE IF EXISTS `members`;
CREATE TABLE `members` (
  `members_id` int(11) NOT NULL AUTO_INCREMENT,
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` datetime DEFAULT NULL COMMENT '更新时间' ,
  `member_name` varchar(50) NOT NULL DEFAULT '',
  `member_phone` varchar(100) NOT NULL DEFAULT '',
  `member_password` varchar(100) NOT NULL DEFAULT '',
  `remarks` varchar(100) NOT NULL DEFAULT '',
  `recommendation_code` varchar(100) NOT NULL DEFAULT '',
  `role` tinyint(3) NOT NULL DEFAULT '0' COMMENT '用户权限',
  `member_address1` varchar(100) NOT NULL DEFAULT '',		
  `member_address2` varchar(100) NOT NULL DEFAULT '',	
  `member_address3` varchar(100) NOT NULL DEFAULT '',	
	
	
  PRIMARY KEY (`members_id`),
  UNIQUE KEY `members_id` (`members_id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


-- ----------------------------
-- Table structure for combine
-- ----------------------------
DROP TABLE IF EXISTS `combine`;
CREATE TABLE `combine` (
  `combine_id` int(11) NOT NULL AUTO_INCREMENT COMMENT '套餐id',
  `order_number` varchar(255) NOT NULL COMMENT '订单编号',
  `combine_name` varchar(50) NOT NULL COMMENT '套餐名称',
  `user_id` int(10) unsigned NOT NULL COMMENT '用户id',
  `combine_month` datetime NOT NULL COMMENT '套餐所属月份',
  `total_money` decimal(10,2) NOT NULL COMMENT '总金额',
  `discounts` decimal(10,2) NOT NULL COMMENT '优惠金额（实付金额）',
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` datetime DEFAULT NULL COMMENT '更新时间' ,
  `combine_status` varchar(255) NOT NULL COMMENT '套餐状态：1 用户已下单 2 已付款 3 正在配送 4配送完成 5确认收货 99 取消订单',
  PRIMARY KEY (`combine_id`),
  UNIQUE KEY `order_number` (`order_number`) USING BTREE,
  KEY `user_id` (`user_id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='套餐表';

-- ----------------------------
-- Table structure for combine_detail
-- ----------------------------
DROP TABLE IF EXISTS `combine_detail`;
CREATE TABLE `combine_detail` (
  `detail_id` int(11) NOT NULL,
  `combine_id` int(10) unsigned NOT NULL COMMENT '套餐id',
  `good_id` int(10) unsigned NOT NULL COMMENT '商品id',
  `good_name` varchar(255) NOT NULL COMMENT '商品名（快照）',
  `good_money` varchar(255) NOT NULL COMMENT '商品价格（快照）',
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` datetime DEFAULT NULL COMMENT '更新时间' ,

  PRIMARY KEY (`detail_id`),
  KEY `combine_id` (`combine_id`) USING BTREE,
  KEY `good_id` (`good_id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='套餐详情表';

-- ----------------------------
-- Table structure for good
-- ----------------------------
DROP TABLE IF EXISTS `good`;
CREATE TABLE `good` (
  `good_id` int(10) unsigned NOT NULL,
  `good_name` varchar(50) NOT NULL COMMENT '商品名',
  `good_money` decimal(10,2) NOT NULL COMMENT '商品原价',
  `good_real_money` decimal(10,2) NOT NULL COMMENT '商品实际价格',
  `good_main_img` varchar(255) NOT NULL COMMENT '商品主图',
  `good_detail_img` varchar(255) NOT NULL COMMENT '商品详情图',
  `stock` int(10) unsigned NOT NULL COMMENT '库存',
  `soldout` tinyint(3) unsigned NOT NULL COMMENT '0 正常 -1 下架',
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` datetime DEFAULT NULL COMMENT '更新时间' ,

  PRIMARY KEY (`good_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='商品表';


DROP TABLE IF EXISTS `orders`;
CREATE TABLE `orders` (
  `order_id` int(11) NOT NULL AUTO_INCREMENT,
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` datetime DEFAULT NULL COMMENT '更新时间' ,
  `goods_id` varchar(50) NOT NULL DEFAULT '',
  `goods_name` varchar(50) NOT NULL DEFAULT 'noname',
  `goods_price` float(10,2) NOT NULL DEFAULT '0.00',
  `purchase_quantity` float(10,0) NOT NULL DEFAULT '0',	
  `member_id` varchar(50) NOT NULL DEFAULT '',
  `members_addr` varchar(50) NOT NULL DEFAULT '',
  `state` tinyint(8) NOT NULL DEFAULT '0' COMMENT '订单状态',	
  `state_name` varchar(50) NOT NULL DEFAULT '',	
  PRIMARY KEY (`order_id`),
  UNIQUE KEY `order_id` (`order_id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

 





