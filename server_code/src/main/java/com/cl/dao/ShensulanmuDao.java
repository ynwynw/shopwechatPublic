package com.cl.dao;

import com.cl.entity.ShensulanmuEntity;
import com.baomidou.mybatisplus.mapper.BaseMapper;
import java.util.List;
import java.util.Map;
import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.plugins.pagination.Pagination;

import org.apache.ibatis.annotations.Param;
import com.cl.entity.view.ShensulanmuView;


/**
 * 申诉栏目
 * 
 * @author 
 * @email 
 * @date 2024-02-01 11:17:28
 */
public interface ShensulanmuDao extends BaseMapper<ShensulanmuEntity> {
	
	List<ShensulanmuView> selectListView(@Param("ew") Wrapper<ShensulanmuEntity> wrapper);

	List<ShensulanmuView> selectListView(Pagination page,@Param("ew") Wrapper<ShensulanmuEntity> wrapper);
	
	ShensulanmuView selectView(@Param("ew") Wrapper<ShensulanmuEntity> wrapper);
	

}
