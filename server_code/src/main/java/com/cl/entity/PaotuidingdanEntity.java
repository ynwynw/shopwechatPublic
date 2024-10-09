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
 * 跑腿订单
 * 数据库通用操作实体类（普通增删改查）
 * @author 
 * @email 
 * @date 2024-02-01 11:17:28
 */
@TableName("paotuidingdan")
public class PaotuidingdanEntity<T> implements Serializable {
	private static final long serialVersionUID = 1L;


	public PaotuidingdanEntity() {
		
	}
	
	public PaotuidingdanEntity(T t) {
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
	 * 图片
	 */
					
	private String tupian;
	
	/**
	 * 跑腿费
	 */
					
	private String paotuifei;
	
	/**
	 * 收货人
	 */
					
	private String shouhuoren;
	
	/**
	 * 收货人手机
	 */
					
	private String shouhuorenshouji;
	
	/**
	 * 发布时间
	 */
				
	@JsonFormat(locale="zh", timezone="GMT+8", pattern="yyyy-MM-dd HH:mm:ss")
	@DateTimeFormat 		
	private Date fabushijian;
	
	/**
	 * 商家账号
	 */
					
	private String shangjiazhanghao;
	
	/**
	 * 商家地址
	 */
					
	private String shangjiadizhi;
	
	/**
	 * 接单状态
	 */
					
	private String jiedanzhuangtai;
	
	
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
	 * 设置：图片
	 */
	public void setTupian(String tupian) {
		this.tupian = tupian;
	}
	/**
	 * 获取：图片
	 */
	public String getTupian() {
		return tupian;
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
	 * 设置：收货人
	 */
	public void setShouhuoren(String shouhuoren) {
		this.shouhuoren = shouhuoren;
	}
	/**
	 * 获取：收货人
	 */
	public String getShouhuoren() {
		return shouhuoren;
	}
	/**
	 * 设置：收货人手机
	 */
	public void setShouhuorenshouji(String shouhuorenshouji) {
		this.shouhuorenshouji = shouhuorenshouji;
	}
	/**
	 * 获取：收货人手机
	 */
	public String getShouhuorenshouji() {
		return shouhuorenshouji;
	}
	/**
	 * 设置：发布时间
	 */
	public void setFabushijian(Date fabushijian) {
		this.fabushijian = fabushijian;
	}
	/**
	 * 获取：发布时间
	 */
	public Date getFabushijian() {
		return fabushijian;
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
	/**
	 * 设置：接单状态
	 */
	public void setJiedanzhuangtai(String jiedanzhuangtai) {
		this.jiedanzhuangtai = jiedanzhuangtai;
	}
	/**
	 * 获取：接单状态
	 */
	public String getJiedanzhuangtai() {
		return jiedanzhuangtai;
	}

}
