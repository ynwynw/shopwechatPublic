package com.cl.entity;

import com.baomidou.mybatisplus.annotations.TableId;
import com.baomidou.mybatisplus.annotations.TableName;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.lang.reflect.InvocationTargetException;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

import org.springframework.format.annotation.DateTimeFormat;
import com.fasterxml.jackson.annotation.JsonFormat;
import org.apache.commons.beanutils.BeanUtils;
import com.baomidou.mybatisplus.annotations.TableField;
import com.baomidou.mybatisplus.enums.FieldFill;
import com.baomidou.mybatisplus.enums.IdType;


/**
 * 订单完成
 * 数据库通用操作实体类（普通增删改查）
 * @author 
 * @email 
 * @date 2024-02-01 11:17:28
 */
@TableName("dingdanwancheng")
public class DingdanwanchengEntity<T> implements Serializable {
	private static final long serialVersionUID = 1L;


	public DingdanwanchengEntity() {
		
	}
	
	public DingdanwanchengEntity(T t) {
		try {
			BeanUtils.copyProperties(this, t);
		} catch (IllegalAccessException | InvocationTargetException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	/**
	 * 主键id
	 */
	@TableId
	private Long id;
	/**
	 * 跑腿名称
	 */
					
	private String paotuimingcheng;
	
	/**
	 * 商品名称
	 */
					
	private String shangpinmingcheng;
	
	/**
	 * 送达地址
	 */
					
	private String songdadizhi;
	
	/**
	 * 跑腿费
	 */
					
	private String paotuifei;
	
	/**
	 * 完成时间
	 */
				
	@JsonFormat(locale="zh", timezone="GMT+8", pattern="yyyy-MM-dd HH:mm:ss")
	@DateTimeFormat 		
	private Date wanchengshijian;
	
	/**
	 * 用户账号
	 */
					
	private String yonghuzhanghao;
	
	/**
	 * 用户姓名
	 */
					
	private String yonghuxingming;
	
	/**
	 * 商家账号
	 */
					
	private String shangjiazhanghao;
	
	/**
	 * 商家地址
	 */
					
	private String shangjiadizhi;
	
	
	@JsonFormat(locale="zh", timezone="GMT+8", pattern="yyyy-MM-dd HH:mm:ss")
	@DateTimeFormat
	private Date addtime;

	public Date getAddtime() {
		return addtime;
	}
	public void setAddtime(Date addtime) {
		this.addtime = addtime;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}
	/**
	 * 设置：跑腿名称
	 */
	public void setPaotuimingcheng(String paotuimingcheng) {
		this.paotuimingcheng = paotuimingcheng;
	}
	/**
	 * 获取：跑腿名称
	 */
	public String getPaotuimingcheng() {
		return paotuimingcheng;
	}
	/**
	 * 设置：商品名称
	 */
	public void setShangpinmingcheng(String shangpinmingcheng) {
		this.shangpinmingcheng = shangpinmingcheng;
	}
	/**
	 * 获取：商品名称
	 */
	public String getShangpinmingcheng() {
		return shangpinmingcheng;
	}
	/**
	 * 设置：送达地址
	 */
	public void setSongdadizhi(String songdadizhi) {
		this.songdadizhi = songdadizhi;
	}
	/**
	 * 获取：送达地址
	 */
	public String getSongdadizhi() {
		return songdadizhi;
	}
	/**
	 * 设置：跑腿费
	 */
	public void setPaotuifei(String paotuifei) {
		this.paotuifei = paotuifei;
	}
	/**
	 * 获取：跑腿费
	 */
	public String getPaotuifei() {
		return paotuifei;
	}
	/**
	 * 设置：完成时间
	 */
	public void setWanchengshijian(Date wanchengshijian) {
		this.wanchengshijian = wanchengshijian;
	}
	/**
	 * 获取：完成时间
	 */
	public Date getWanchengshijian() {
		return wanchengshijian;
	}
	/**
	 * 设置：用户账号
	 */
	public void setYonghuzhanghao(String yonghuzhanghao) {
		this.yonghuzhanghao = yonghuzhanghao;
	}
	/**
	 * 获取：用户账号
	 */
	public String getYonghuzhanghao() {
		return yonghuzhanghao;
	}
	/**
	 * 设置：用户姓名
	 */
	public void setYonghuxingming(String yonghuxingming) {
		this.yonghuxingming = yonghuxingming;
	}
	/**
	 * 获取：用户姓名
	 */
	public String getYonghuxingming() {
		return yonghuxingming;
	}
	/**
	 * 设置：商家账号
	 */
	public void setShangjiazhanghao(String shangjiazhanghao) {
		this.shangjiazhanghao = shangjiazhanghao;
	}
	/**
	 * 获取：商家账号
	 */
	public String getShangjiazhanghao() {
		return shangjiazhanghao;
	}
	/**
	 * 设置：商家地址
	 */
	public void setShangjiadizhi(String shangjiadizhi) {
		this.shangjiadizhi = shangjiadizhi;
	}
	/**
	 * 获取：商家地址
	 */
	public String getShangjiadizhi() {
		return shangjiadizhi;
	}

}
